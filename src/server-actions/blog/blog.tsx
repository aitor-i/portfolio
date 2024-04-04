'use server'
import { ObjectId } from 'mongodb';
import { getPointer, getMongoClinet } from './../mongodb/mongoClient'
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation'
import Token from '../utils/token';

export interface BlogPost {
  _id: ObjectId
  title: string,
  post: string,
  date: Date
}

export async function getBlogs() {
  try {
    var mongoClient = await getMongoClinet()
    await mongoClient.connect();
    const pointer = await getPointer('blog');

    const post = await pointer.find<BlogPost>({}).toArray();
    return post as BlogPost[];

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

export async function getBlog(id: string) {
  try {
    var mongoClient = await getMongoClinet()
    await mongoClient.connect();
    const pointer = await getPointer('blog');

    const post = await pointer.findOne<BlogPost>({ _id: new ObjectId(id) });
    return post;

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

export async function postBlog(title: string, post: string) {
  try {
    var mongoClient = await getMongoClinet()
    await mongoClient.connect();
    const pointer = await getPointer('blog');

    const cookie = cookies().get('ai')
    const tokenObject = new Token()
    const isValid = tokenObject.isValidToken(cookie?.value!)
    if (!isValid) {
      cookies().delete('ai')
    }

    const newPost = {
      post,
      title,
      date: new Date()
    }

    const res = await pointer.insertOne(newPost)
    revalidatePath("/dashboard")
    return res

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

export async function deletePost(id: ObjectId) {
  try {
    var mongoClient = await getMongoClinet()
    await mongoClient.connect();
    const pointer = await getPointer('blog');

    console.log(id)
    const res = await pointer.deleteOne({ _id: new ObjectId(id) })
    revalidatePath("/dashboard")
    return res

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
