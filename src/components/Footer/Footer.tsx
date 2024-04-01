import Link from "next/link"
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, TwitterIcon } from "../Icons/Icons"
export default function Footer() {
  return (
    <footer className="p-6 bg-gray-950 text-white">
      <div className="flex items-center justify-between">
        <p>© 2024 Aitor Ibarra. All rights reserved.</p>
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
