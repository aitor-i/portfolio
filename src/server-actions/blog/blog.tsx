'use server'
import { getPointer, getMongoClinet } from './mongoClient'

export interface BlogPost {
  id: number,
  title: string,
  post: string,
  date: Date
}

export async function getBlogs() {
  try {
    var mongoClient = await getMongoClinet()
    await mongoClient.connect();
    const userPointer = await getPointer('blog');

    const invitations = userPointer.find({}).toArray();
    if (!invitations) throw new Error('No invitations found!');
    else if (invitations) {
      return invitations;
    }

  } catch (error: Error | unknown) {
    console.log(Error.toString());
    throw new Error(Error.toString());

  } finally {
    setTimeout(async () => {
      await mongoClient.close();
      console.log('Db closed');
    }, 4000);
  }
}
