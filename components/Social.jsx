"use client"
import React from 'react'
import { SlSocialFacebook, SlSocialInstagram} from "react-icons/sl";
import { SiZalo } from "react-icons/si";
import Link from 'next/link';

const socials = [
     {icon : <SlSocialFacebook/>, path: "https://www.facebook.com/phuonggminhhh"},
     {icon : <SlSocialInstagram/>, path: "https://www.instagram.com/_pm.yg/"},
     {icon : <SiZalo/>, path: "https://zalo.me/0869274699"}
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((items, index)=>(
          <Link key={index} href={items.path} className={iconStyles} target='_blank'>{items.icon}</Link>
     ))}
    </div>
  )
}

export default Social
