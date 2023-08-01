import Link from "next/link"
import React, { useState } from "react"
import NavItem from "../NavItem"
import clsx from 'clsx'

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Users", href: "/users" }
]
const Navbar = () => {
  const [navActive, setNavActive] = useState(true)
  const [activeIdx, setActiveIdx] = useState(-1)

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
          <div
            className={clsx(`${activeIdx ===idx ? "text-link-text-active" : ""}`)}
            onClick={() => {
              setActiveIdx(idx)
            }}
            key={menu.text}
          >
            <NavItem active={activeIdx === idx} {...menu} />
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar