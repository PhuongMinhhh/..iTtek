"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
const  links = [
     {
          name: "Trang chủ",
          path:"/",
          
     },
     {
          name: "giới thiệu ",
          path:"/gioi-thieu"
     },
     {
          name: "Tư vấn",
          path:"/tu-van"
     },
     {
          name: "Cấu hình",
          path:"/cau-hinh"
     },
     {
          name: "chi phí",
          path:"/chi-phi"
          
     },
];
const Nav = () =>{
     const pathname = usePathname();
     console.log(pathname)
     
     return(
          <nav className="flex gap-8  ">
               {links.map((link,index) =>{
          return <Link  className={`${link.path === pathname && "text-white  border-logo rounded-full px-2 bg-logo "} capitalize font-medium  transition-all`} key={index} href={link.path}>{link.name}</Link> 
               })}
          </nav>
     )
}
export default Nav ;