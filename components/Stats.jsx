"use client"
import React from 'react'
import CountUp from "react-countup"
const stats = [
     {    
          text:"Intel",
          num: 30,
          describe: " /../"
          
          
      },
     {
          
          text:"AMD",
          num: 14,
          describe: " /../"
      },
      {
          text:"Xeon",
          num: 12,
          describe: " /../"
      },
      {
          text:"Hackinosh",
          num: 1,
          describe: " /../"
      }
]
const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0 '>
     <div className='container mx-auto'>
          <div className='flex flex-wrap gap-6 max-w-[80vw] max-auto xl:max-w-none'>
          {stats.map((items,index)=>{
               return <div key={index} className='flex-1 flex gap-4 items-center justify-center xl:justify-start'>
                         <CountUp end={items.num} duration={5} delay={1} className="text-4xl xl:text-6xl font-extrabold text-accent"/>
                         <p className={`${items.text.length < 15 ? "max-w-[1080px]":"max-w-[150px]"} leading-snug text-white/80`}>{items.text}</p>
               </div>
          })}
          </div>
          
     </div>         
    </section>
  )
}

export default Stats
