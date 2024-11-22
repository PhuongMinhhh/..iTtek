import Image from "next/image";
import { Button } from "../components/ui/button"  
import { TbMessageForward } from "react-icons/tb";


export default function Home() {
  return (
   <section className="h-full">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left ">
          <span className="text-xl">
            Giới thiệu
          </span>
          <h1 className="h1 mb-6">
            Xin chào,
            <br/> Mình là <span className="text-accent">.it</span>Tek
            <br/>
            Mình có thể hỗ trợ gì?
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            Bọn mình chuyên tư vấn cấu hình, xây dựng cấu hình theo nhu cầu (chơi game ,làm đồ họa, văn phòng, chỉnh sửa... ). Lắp đặt và cài đặt phần mềm theo yêu cầu!
          </p>
          <div  className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 border-2 rounded-full p-2 border-accent text-accent hover:text-white/80">
              <span >Tư vấn</span>
              <TbMessageForward className="text-xl"/>
             </Button>
          </div>
            
          
        </div>
        <div>Photo</div>
      </div>
    </div>
   </section>
  );
}
