import Link from "next/link"
import { useRouter } from 'next/router'
import React, { useState } from "react"
import NavItem from "../NavItem"
import clsx from 'clsx'

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Users", href: "/users" }
]
const Navbar = () => {
  const router = useRouter()
  const [navActive, setNavActive] = useState(true)
  const activePath = router.asPath

  return (
    <nav className={clsx(navActive ? 'w-[250px]' : 'w-[100px]') + ' flex flex-col h-[100%] p-8 z-20'}>
      <header className="flex gap-10">
        <Link href={"/"}>
          Logo here
        </Link>
        <button onClick={() => setNavActive(!navActive)}>
          mini
        </button>
      </header>
      <div>
        {MENU_LIST.map((menu, idx) => (
          <NavItem key={menu.text} active={activePath === menu.href} {...menu} />
        ))}
      </div>
    </nav>
  )
}

export default Navbar