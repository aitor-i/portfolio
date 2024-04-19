import Link from "next/link"
import { GithubIcon, LinkedinIcon, MailIcon } from "../Icons/Icons"
export default function Footer() {
  return (
    <footer className="p-6 bg-gray-950 text-white">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <p>© 2024 Aitor Ibarra. All rights reserved.</p>
          <Link href={"/dashboard"}>Dashboard</Link>
          <Link href={"/skills"}>Skills</Link>
        </div>
        <div className="space-x-4">
          <Link href="mailto:contact@aitoribarra.com">
            <MailIcon className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/aitor-i-5b1b1b1b2/">
            <LinkedinIcon className="h-6 w-6" />
          </Link>
          <Link href="https://github.com/aitor-i">
            <GithubIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
