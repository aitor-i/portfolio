import Link from "next/link"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../Icons/Icons"
export default function Footer() {
  return (
    <footer className="p-6 text-white">
      <div className="flex items-center justify-between">
        <p>© 2024 Aitor Ibarra. All rights reserved.</p>
        <div className="space-x-4">
          <Link href="#">
            <FacebookIcon className="h-6 w-6" />
          </Link>
          <Link href="#">
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link href="#">
            <InstagramIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
