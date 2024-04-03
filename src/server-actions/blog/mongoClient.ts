'use server'
import { MongoClient, MongoClientOptions, Db } from 'mongodb';

type DbName = 'portfolio'
type Collection = 'blog' | 'users'

const mongoClientOptions: MongoClientOptions = {};

const uri = process.env.MONGO_CONNECTION_STRING;

export async function getMongoClinet() {
  return new MongoClient(uri!, mongoClientOptions);
}

export async function getPointer(collection: Collection) {
  const dbName: DbName = 'portfolio';
  const mongoClient = await getMongoClinet();
  const database: Db = mongoClient.db(dbName);
  return database.collection(collection);
}
