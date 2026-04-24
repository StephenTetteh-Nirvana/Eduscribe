"use client"

import { GraduationCap, Menu } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import Link from "next/link"
import MobileNavMenu from "./MobileNavMenu"
import { AnimatePresence } from "motion/react"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname ()
  
  return (
    <div className={`${pathname === "/login" && "hidden"}`}>
      <nav className="bg-white w-full border-b border-gray-300 px-5 py-3 flex items-center justify-between">
        <div className="flex justify-between items-center w-full"> 
          <div className="flex gap-2 items-center">
            <GraduationCap size={30} className="text-[var(--primaryTheme)]" />    
            <h1 className="flex items-center font-[900] text-[var(--primaryTheme)] text-[25px]">EDUSCRIBE</h1>
          </div>

          {/* <Menu className="md:hidden cursor-pointer" size={24} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} /> */}
          <Link href="/login">
            <Button 
              className="border-none bg-[var(--secondaryTheme)] text-[15px] text-white rounded-full p-5 cursor-pointer font-bold"
              >
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar For Navigation  */}
      {/* <AnimatePresence>
        {isMobileMenuOpen && <MobileNavMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />}
      </AnimatePresence> */}
    </div>

  )
}

export default Navbar