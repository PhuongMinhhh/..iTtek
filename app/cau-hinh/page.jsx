"use client"
import {ScrollArea} from "@/components/ui/scroll-area"
import {motion} from "framer-motion"
import { Tabs,TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

const page = () => {
  
  return (  
    <motion.div initial= {{ opacity: 0 }} animate={{ opacity:1, transition: {delay: 0.4, duration:0.4, ease:"easeIn"} }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs  
        defaultValue="intel"
        className="flex flex-col xl:flex-row gap-[60px] ">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="intel">Cấu hình Intel</TabsTrigger>
            <TabsTrigger value="amd">Cấu hình AMD</TabsTrigger>
            <TabsTrigger value="xeon">Cấu hình Xeon</TabsTrigger>
            <TabsTrigger value="hackintosh">Cấu hình Hackintosh</TabsTrigger>
          </TabsList>
          <div>
            <TabsContent value="intel" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left h-[400px] ">
                <h3 className="text-3xl font-bold ">Intel</h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">Description</p>
              <ScrollArea className="h-[300px]">
              <div className="grid grid-cols-3 gap-14  " >
                <Image className="object-fill rounded-2xl " src="https://product.hstatic.net/200000837185/product/pc_gaming_msi_xi5k_-_407s_86f42c7ff03d43aaa99e9684e14c8520_grande.jpg" height={200} width={250} alt=""/>
                <Image className="object-fill rounded-2xl" src="https://product.hstatic.net/200000837185/product/pc_gaming_msi_xi5k_-_407s_86f42c7ff03d43aaa99e9684e14c8520_grande.jpg" height={200} width={250} alt=""/>
                <Image className="object-fill rounded-2xl" src="https://product.hstatic.net/200000837185/product/pc_gaming_msi_xi5k_-_407s_86f42c7ff03d43aaa99e9684e14c8520_grande.jpg" height={200} width={250} alt=""/>
                <Image className="object-fill rounded-2xl" src="https://product.hstatic.net/200000837185/product/pc_gaming_msi_xi5k_-_407s_86f42c7ff03d43aaa99e9684e14c8520_grande.jpg" height={200} width={250} alt=""/>
                <Image className="object-fill rounded-2xl" src="https://product.hstatic.net/200000837185/product/pc_gaming_msi_xi5k_-_407s_86f42c7ff03d43aaa99e9684e14c8520_grande.jpg" height={200} width={250} alt=""/>
                <Image className="object-fill rounded-2xl" src="https://product.hstatic.net/200000837185/product/pc_gaming_msi_xi5k_-_407s_86f42c7ff03d43aaa99e9684e14c8520_grande.jpg" height={200} width={250} alt=""/>
              </div>
              </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="amd" className="w-full">AMD</TabsContent>
            <TabsContent value="xeon" className="w-full">Xeon</TabsContent>
            <TabsContent value="hackintosh" className="w-full">Hackintosh</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
   )

}

export default page
