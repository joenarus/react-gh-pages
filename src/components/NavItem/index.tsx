import Link from "next/link"
import { FC } from "react"

type Props = {
  text: string,
  href: string,
  active: boolean
}

const NavItem: FC<Props> = ({ active, href, text }) => {
  return (
    <Link href={href}>
      {text}
    </Link>
  )
}
export default NavItem