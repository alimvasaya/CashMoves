import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
  
export const SidebarData = [
  {
    title: "Main Page",
    path: "/mainPage",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Learn",
    path: "/learn",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Predictor",
    path: "/predictor",
    icon: <FaIcons.FaFeatherAlt/>,
  },
  {
    title: "User",
    path: "/user",
    icon: <FaIcons.FaUser />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoIcons.IoMdSettings/>,
  },
];