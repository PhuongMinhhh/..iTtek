import Link from "next/link"
import Nav from "@/components/Nav"
import { Button } from "./ui/button"
const Header = () =>{
     return(
     
          <header className="py-8 xl:py-12  text-white">
               <div className="container mx-auto flex justify-between items-center">
                    <Link href="/">
                         <h1 className="text-4xl font-semibold">
                         <span className="text-logo hover:text-white transition-all duration-500">.it</span>Tek
                         </h1>
                    </Link>
                    <div className="hidden xl:flex items-center gap-8">     
                         <Nav/>
                         <Link href="/contact">
                              <Button className="rounded-full bg-logo hover:bg-[#6b21a8]">
                                   Hire Me
                              </Button>
                         </Link>
                    </div>
                    
               </div>
          </header>
     )
     
}
export default Header