'use server'

import { cookies } from "next/headers";
import { getMongoClinet, getPointer } from "../mongodb/mongoClient";
import { textToHash } from "../utils/textToHash";
import { generateRandomPassword } from "../utils/generateRandomPassword";
import 'jsonwebtoken'
import { ObjectId } from "mongodb";
import Token from "../utils/token";

interface User {
  _id: ObjectId,
  username: string,
  password: string

}
interface Message {
  message: string,

}
export async function generateUser(username: string) {
  try {
    var mongoClient = await getMongoClinet()
    await mongoClient.connect();
    const pointer = await getPointer('users');

    const password = generateRandomPassword(8);
    const hashPass = await textToHash(password)

    const newUser: Omit<User, '_id'> = {
      password: hashPass,
      username
    }

    const res = await pointer.insertOne(newUser)
    if (res.acknowledged) return { message: 'User created', password }
    return { message: 'Error on user generation', password: '' }

  } catch (error: Error | unknown) {
    console.log(Error.toString());
    throw new Error("Error posting!");

  } finally {
    setTimeout(async () => {
      await mongoClient.close();
      console.log('Db closed');
    }, 4000);
  }
}

export async function getUsers() {
  try {
    var mongoClient = await getMongoClinet()
    await mongoClient.connect();
    const pointer = await getPointer('users');

    const users = await pointer.find<User>({}).toArray()
    return users

  } catch (error: Error | unknown) {
    console.log(Error.toString());
    throw new Error("Erro geting users");

  } finally {
    setTimeout(async () => {
      await mongoClient.close();
      console.log('Db closed');
    }, 4000);
  }
}

export async function validateToken(token: string) {
  console.log("Token:", token)
  const tokenObject = new Token()
  const isValid = tokenObject.isValidToken(token)
  return isValid
}



export async function login(username: string, password: string) {
  try {
    var mongoClient = await getMongoClinet()
    await mongoClient.connect();
    const pointer = await getPointer('users');

    const user = await pointer.findOne<User>({ username: username });
    if (!user) return false;

    const hashPass = await textToHash(password)
    if (hashPass === user.password) {
      const tokenObject = new Token()
      tokenObject.generateToken(username)

      const httpOnly = process.env.IS_DEVELOPMENT ? false : true
      const token = tokenObject.getToken()
      cookies().set({
        name: "ai",
        value: token,
        httpOnly: false,
        path: "/",
        domain: "www.aitoribarra.com"
      })
    }

    console.log("Login OK")
    return true

  } catch (error: Error | unknown) {
    console.log(Error.toString());
    throw new Error("Erro geting post");

  } finally {
    setTimeout(async () => {
      await mongoClient.close();
      console.log('Db closed');
    }, 4000);
  }
}
