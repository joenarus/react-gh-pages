import { useState } from "react";

//import react pro sidebar components
import {
  Sidebar,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import {FiHome} from 'react-icons/fi'
import {FaList, FaRegHeart} from 'react-icons/fa'
import {RiPencilLine} from 'react-icons/ri'
import {BiCog} from 'react-icons/bi'

export const MainNavigation = () => {
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(false)

    const menuIconClick = () => {
        setIsMenuCollapsed(isCollapsed => !isCollapsed)
    }

    return (
        <Sidebar collapsed={isMenuCollapsed}>
          <Menu>
            <MenuItem active={true} icon={<FiHome />}>
              Home
            </MenuItem>
            <MenuItem icon={<FaList />}>Category</MenuItem>
            <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
            <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
            <MenuItem icon={<BiCog />}>Settings</MenuItem>
          </Menu>
        </Sidebar>
    )
}