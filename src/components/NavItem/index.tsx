import Link from "next/link"
import { FC } from "react"
import clsx from 'clsx'

type Props = {
  text: string,
  href: string,
  active: boolean
}

const NavItem: FC<Props> = ({ active, href, text }) => {
  return (
    <div className={clsx(`${active ? "text-link-text-active" : ""}`) + " w-[100px] h-[64px] flex items-center p-3"}>
      <Link href={href}>
        {text}
      </Link>
    </div>
  )
}
export default NavItem