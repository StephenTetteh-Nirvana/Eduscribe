"use client"
import { motion } from "motion/react"
import { Button } from "../ui/button"
import { GraduationCap } from "lucide-react";
import { X } from "lucide-react";

interface MobileNavMenuProps {
    setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const MobileNavMenu = ({ setIsMobileMenuOpen }: MobileNavMenuProps) => {
    return (
        <motion.div
          initial = {{ x: -500 }} 
          animate = {{ x: 0 }}
          exit={{ x: -500}}
          transition= {{ duration:0.6, delay: 0.2 }}
          className="fixed inset-0 w-full min-h-full z-50 bg-[var(--primaryTheme)]"
        >
          {/* Header Section  */}
          <div className="flex items-center justify-between px-3 mt-5">
            <div className="flex items-center gap-2">
              <GraduationCap size={40} color="white"/>
              <h1 className="text-white text-[30px] font-[900]">EDUSCRIBE</h1>
            </div>

            <Button 
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(false)}
              className=" border border-white rounded-full p-2 cursor-pointer"
            >
                <X color="white"/>
            </Button>
          </div>

        </motion.div>
    )
}

export default MobileNavMenu