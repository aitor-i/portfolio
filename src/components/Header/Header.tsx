import Link from "next/link";

export default function Header() {
  return (
    <nav className="grid grid-cols-4 md:grid-cols-8 px-4 py-4 md:px-8 gap-4">
      <span>
        <Link href={"/"}>Aitor Ibarra</Link>
      </span>
      <Link className="col-start-7" href={"/projects"}>Projects</Link>
      <Link className="col-start-8" href={"/blog"}>Blog</Link>
    </nav>
  )
}
