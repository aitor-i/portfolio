"use client"
import { Button } from "@/components/ui/button"
import { deletePost } from "@/server-actions/blog/blog"
import { ObjectId } from "mongodb"
import { useFormStatus } from "react-dom"

interface Props {
  id: ObjectId,
  name: string,
}
export default function PostItem({ id, name }: Props) {
  const { pending } = useFormStatus()
  return (
    <form action={() => deletePost(id)} key={id.toString()} className="grid-cols-2 text-gray-950 bg-gray-50 py-2 px-2 rounded w-full grid gap-4">
      <span className="font-semibold">{name}</span>
      {pending ? <p>Deleting...</p> :
        <Button type="submit" className="justify-self-end bg-red-600 hover:bg-red-500 font-semibold">Eliminar</Button>
      }
    </form>
  )
}
