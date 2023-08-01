import Link from "next/link"
import { FC } from "react"

type Props = {
  text: string,
  href: string,
  active: boolean
}

const NavItem: FC<Props> = ({ active, href, text }) => {
  return (
    <div className="w-[100px]">
      <Link href={href}>
        {text}
      </Link>
    </div>
  )
}
export default NavItem