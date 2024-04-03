'use server'
import { ObjectId } from 'mongodb';
import { getPointer, getMongoClinet } from './mongoClient'

export interface BlogPost {
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

export async function postBlog(title: string, post: string) {
  try {
    var mongoClient = await getMongoClinet()
    await mongoClient.connect();
    const pointer = await getPointer('blog');

    const newPost = {
      post,
      title,
      date: new Date()
    }

    const res = await pointer.insertOne(newPost)
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
