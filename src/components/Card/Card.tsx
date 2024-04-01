import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  description: string
  tags: string
  image: StaticImageData
  url: string
}

export default function Card({ title, url, tags, description, image }: Props) {
  return (
    <Link href={url} className='border rounded aspect-auto md:aspect-video'>
      <Image
        alt="Furniture 1"
        className="w-full h-48 object-cover"
        height="200"
        src={image}
        style={{
          aspectRatio: "200/200",
          objectFit: "cover",
        }}
        width="200"
      />
      <div className='p-2 mt-6'>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <p>{description}</p>
        <code>{tags}</code>
      </div>
    </Link >
  )
}
