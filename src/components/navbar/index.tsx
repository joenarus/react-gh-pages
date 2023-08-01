import Link from "next/link"
import React, { useState } from "react"
import NavItem from "../NavItem"
import './styles.css'

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
]
const Navbar = () => {
  const [navActive, setNavActive] = useState(false)
  const [activeIdx, setActiveIdx] = useState(-1)

  return (
    <nav className='flex flex-col h-[100%]'>
      <Link href={"/"}>
        Logo here
      </Link>
      <div className={`${navActive ? "active" : ""} nav__menu-list`}>
        {MENU_LIST.map((menu, idx) => (
          <div
            onClick={() => {
              setActiveIdx(idx)
              setNavActive(false)
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