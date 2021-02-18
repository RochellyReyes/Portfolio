import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        className:'nav-text'
    },
    {
        title:'Projects',
        path:'/projects',
        icon: <CgIcons.CgWebsite/>,
        className:'nav-text'
    },
    {
        title:'Resume',
        path:'/resume',
        icon: <IoIcons.IoIosPaper/>,
        className:'nav-text'
    },
    {
        title:'Contact',
        path:'/contact',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        className:'nav-text'
    }
]