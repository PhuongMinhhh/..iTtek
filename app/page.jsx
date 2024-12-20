import Image from "next/image";
import { Button } from "../components/ui/button"  
import { TbMessageForward } from "react-icons/tb";
import Social from "@/components/Social";
import Stats from "@/components/Stats";


export default function Home() {
  return (
   <section className="h-full">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">
            
          </span>
          <h1 className="h1 mb-6 whitespace-nowrap scroll-animation ">
            Xin chào,
            <br/> Mình là <span className="text-accent ">.it</span><span>Tek</span>
            <br/>
            Rất vui khi gặp bạn !
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            Bọn mình chuyên tư vấn cấu hình, xây dựng cấu hình theo nhu cầu (chơi game ,làm đồ họa, văn phòng, chỉnh sửa... ). Lắp đặt và cài đặt phần mềm theo yêu cầu!
          </p>
          <div  className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 border-2 rounded-full p-2 border-accent text-accent hover:text-white/80 hover:text-primary hover:transition-all duration-500 ">
              <span >Tư vấn</span>
              <TbMessageForward className="text-xl"/>
             </Button>
             <div className="mb-8 xl:mb-0"> 
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-basez hover:bg-accent hover:text-primary hover:transition-all duration-500 "/> 
            </div>
          </div>
          
          
        </div>
        <div className="order-1 xl:order-none mb-8 xl:ms-0 ">
          Photo 
        </div>
      </div>
    </div>
    <Stats/>
   </section>
  );
}
