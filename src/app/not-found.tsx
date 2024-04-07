import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <section className="flex flex-col py-32 items-center  h-screen  ">
      <div className="text-center space-y-4 flex flex-col gap-2">
        <h1 className="text-6xl font-bold  ">404 Not Found</h1>
        <p className="text-xl ">Oops! The page you are looking for does not exist!</p>
        <Link
          className=""
          href="/"
        >
          <Button className='bg-blue-500 hover:bg-blue-600'>Go back to home</Button>
        </Link>
      </div>
    </section>
  )
}
