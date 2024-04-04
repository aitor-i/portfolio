import { getBlog } from "@/server-actions/blog/blog"
import './post.css'

interface Props {
  params: {
    id: string
  }
}

export default async function page({ params }: Props) {
  const post = await getBlog(params.id)
  const postDate = new Date(post?.date as Date)
  return (
    <div className="min-h-screen ">
      <article className="bg-gray-50 py-12 md:py-24 text-gray-950 px-4 md:px-48">
        <h1 className="text-4xl pt-12 md:text-6xl font-semibold md:pt-24 ">{post?.title}</h1>
        <i className="text-gray-500">{postDate.toDateString()}</i>
        <div className="pt-12 md:pt-24" dangerouslySetInnerHTML={{ __html: post?.post! }}></div>
      </article>
    </div>
  )
}
