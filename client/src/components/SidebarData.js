import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from  "react-icons/md";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Request',
    path: '/request',
    icon: <BsIcons.BsCodeSlash />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: < MdIcons.MdMessage/>,
    cName: 'nav-text'
  }
];



