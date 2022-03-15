import React from 'react'
import {AiFillHome, AiOutlineInfoCircle} from "react-icons/ai";
import { ImProfile } from "react-icons/im";

export const SideBarData = [
    {
        title: "Home",
        path: '/home',
        icon: <AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: "Profile",
        path: '/profile',
        icon: <ImProfile/>,
        cName: 'nav-text'
    },
    {
        title: "About",
        path: '/about',
        icon: <AiOutlineInfoCircle/>,
        cName: 'nav-text'
    }
]
