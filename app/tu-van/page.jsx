"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {motion} from 'framer-motion'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,

} from '@/components/ui/select'

import React from 'react'

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
              loading ...................................................................................
            </p>
            <div className='grid grid-col-1 md:grid-cols-2 gap-6'>
              <Input type='firstname' placeholder='Firstname'/>
              <Input type='lastname' placeholder='Lastname'/>
              <Input type='email' placeholder='Email'/>
              <Input tyep='phone' placeholder='Phone'/>
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
          </form>
        </div>
        <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
          info
        </div>
       </div>
      </div>
    </motion.div>
  )
}

export default page
