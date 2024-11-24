"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link"
import {motion} from "framer-motion"
const service = [
  {
    num: "30",
    title: "Intel",
    describe: "Dòng vi xử lý cao cấp dành cho máy chủ và các hệ thống tính toán chuyên sâu. Xeon được tối ưu hóa cho các tác vụ như lưu trữ dữ liệu, xử lý tính toán khoa học, và máy chủ doanh nghiệp. Xeon thường hỗ trợ nhiều lõi (cores) và luồng (threads), giúp tăng cường khả năng xử lý đồng thời.",
    href:"",
  },
  {
    num: 12,
    title: "AMD ",
    describe: "kiến trúc Zen, giúp cải thiện hiệu suất và mức tiêu thụ năng lượng, đồng thời cung cấp hiệu suất mạnh mẽ với giá thành cạnh tranh. Hơn nữa, AMD là công ty đầu tiên áp dụng công nghệ 7nm (nanometer) trong các dòng vi xử lý của mình, điều này giúp tạo ra các vi xử lý có hiệu suất cao và tiết kiệm năng lượng.",
    href:"",
  },
  {
    num: 11,
    title: "Xeon",
    describe: "Xeon được sử dụng trong các ứng dụng cần tính toán mạnh mẽ và đáng tin cậy, như hạ tầng đám mây, máy chủ web, dữ liệu lớn, và phân tích khoa học. Hiện tại, Xeon còn phục vụ nhu cầu làm mmo, airdrop",
    href:"",
  },
  {
    num: 9,
    title: "Hackintosh",
    describe: "cài đặt hệ điều hành macOS của Apple trên một máy tính không phải của Apple, tức là một PC sử dụng phần cứng không phải của Apple. Điều này thường được thực hiện để tận dụng phần cứng mạnh mẽ, giá cả hợp lý của các máy tính PC nhưng chạy hệ điều hành macOS.",
    href:"",
  },
    
  
];
const page = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 '>
      <div className='container mx-auto '>
        <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity:1 , transition: {delay:0.4, duration: 0.4, ease:"easeIn"} }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {
            service.map((service,index)=>{
              return(
                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                  <div>
                    <h2 className="text-accent text-3xl font-extrabold  group-hover:text-outline-hover p-2">
                      {service.title}
                    </h2>   
                    <div>Cấu hình đã build: <span className="text-accent text-2xl">{service.num}</span></div>
                    <p>
                      {service.describe}
                    </p>
                    <Link href={service.href} className="w-[70px] h-[70px] rounded-all bg-white group-hover:bg-accent transition-all duration-500 ">
                      link
                    </Link> 
                    </div> 
                                      
                  <div className="border-b border-white/20 w-full h-full"> </div>
                </div>
              )
            })
          } 
        </motion.div>
      </div>
    </section>
  )
}

export default page
