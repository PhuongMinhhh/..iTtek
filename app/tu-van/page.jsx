"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,

} from '@/components/ui/select'
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { PiMapPinAreaFill } from "react-icons/pi";

import React from 'react'
const info = [
  {
    icon: <FaPhone/>,
    title: "Phone",
    desc:"(+84) 123 456 7890",
    href: "https://wa.me/0869274699"

  },
  {
    icon: <IoIosMail/>,
    title: "Mail",
    desc:"hellobaby@gmail.com",
    href: ""

  },
  {
    icon: <PiMapPinAreaFill/>,
    title: "Address",
    desc:"08 - Tự Lập",
    href:"",

  },
  
]
const page = () => {
  return (
    <motion.div 
    initial={{ opacity: 0  }}
    animate= {{ 
      opacity: 1,
      transition: {delay: 0.4, duration:0.4, ease:"easeIn"}
       }}
       className='py-6'
    >
      <div className='container mx-auto'>
       <div className='flex flex-col xl:flex-row gap-[30px]'>
        <div className='xl:h-[54%] order-2 xl:order-none'>
          <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl '>
            <h3 className='text-accent text-3xl '>
              Bạn cho mình thông tin nha!
            </h3>
            <p className='text-white/60'>
              Hãy cho mình thông tin của bạn cũng như cho mình biết nhu cầu sử dụng cũng như cấu hình dự kiến của bạn nhé!
            </p>
            <div className='grid grid-col-1 md:grid-cols-2 gap-6'>
              <Input type='firstname' placeholder='Firstname' required />
              <Input type='lastname' placeholder='Lastname' required/>
              <Input type='email' placeholder='Email' required/>
              <Input tyep='phone' placeholder='Phone' required/>
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Chọn cấu hình"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Chọn cấu hình</SelectLabel>
                  <SelectItem value="intel">Intel</SelectItem>
                  <SelectItem value="amd">AMD</SelectItem>
                  <SelectItem value="xeon">Xeon</SelectItem>
                  <SelectItem value="hackintosh">Hackintosh</SelectItem>

                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea className="h-[200px]" placeholder="Mô tả"/>
            <Button className="max-w-30" size="md">
              Gửi 
            </Button>

            
          </form>
        </div>
        <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
          <ul className='flex flex-col gap-10'>
            {info.map((item,index)=>{
              return (
                <li key={index} className='flex items-center gap-6'>
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center '>
                    <div className='text-[28px]'>
                      <Link href={item.href}>{item.icon}</Link>
                    
                    </div>
                  </div>
                  <div className='flex-1'>
                     <p className='text-white/60'>
                      {item.title}
                     </p>
                     <h3 className='text-xl'>{item.desc}</h3>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
       </div>
      </div>
    </motion.div>
  )
}

export default page
