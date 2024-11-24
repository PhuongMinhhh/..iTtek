"use client"
import {ScrollArea} from "@/components/ui/scroll-area"
import {motion} from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { fromJSON } from "postcss"
const page = () => {
  return (
    <motion.div initial= {{ opacity: 0 }} animate={{ opacity:1, transition: {delay: 0.4, duration:0.4, ease:"easeIn"} }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs  
        defaultValue="intel"
        className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="intel">Cấu hình Intel</TabsTrigger>
            <TabsTrigger value="amd">Cấu hình AMD</TabsTrigger>
            <TabsTrigger value="xeon">Cấu hình Xeon</TabsTrigger>
            <TabsTrigger value="hackintosh">Cấu hình Hackintosh</TabsTrigger>
          </TabsList>
          <div>
            Content
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default page
