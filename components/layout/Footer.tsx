import { GraduationCap, Mail, PhoneCall } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="relative w-full bg-[var(--primaryTheme)] text-white py-5 flex flex-col items-start px-10 min-h-[50vh] md:flex-row md:gap-3">

            {/* Title and Description  */}
            <div className="flex flex-col gap-2 md:flex-1">
                <div className="flex gap-2">
                  <GraduationCap color="white" size={40}/>
                  <h1 className="text-[30px] md:text-[18px] lg:text-[30px] font-[900] text-center">EDUSCRIBE</h1>
                </div>
              <p 
                className="text-[14px] md:text-[16px] lg:text-[18px] font-[500] md:w-[80%]"
              >   
                Connecting university students, working professionals, and corporate institutions with expert writers and researchers through a modern, user-friendly interface.
              </p>
            </div>

            <div className="md:flex-1 flex flex-col md:flex-row md:gap-10 lg:gap-20">
                {/* Links  */}
                <div className="flex flex-col mt-4">
                    <h1 className="underline text-slate-400">Links</h1>
                    <ul className="flex flex-col gap-1 mt-2">
                    <a href="#" className="text-[14px] md:text-[16px] lg:text-[18px] font-[500] hover:underline">Home</a>
                    <a href="#" className="text-[14px] md:text-[16px] lg:text-[18px] font-[500] hover:underline">About Us</a>
                    <a href="#" className="text-[14px] md:text-[16px] lg:text-[18px] font-[500] hover:underline">Contact Us</a>
                    </ul>
                </div>

                {/* Social Media Links  */}
                <div className="flex flex-col mt-4">
                    <h1 className="underline text-slate-400">Follow Us</h1>
                    <ul className="flex flex-col gap-3 mt-2">

                    <Link href="#" className="text-[14px] md:text-[16px] lg:text-[18px] font-[500] flex items-center gap-2">
                        <div className="bg-white rounded-full p-1">
                        <FaTiktok color="black" size={14}/>
                        </div>
                        Tiktok
                    </Link>

                    <Link href="#" className="text-[14px] md:text-[16px] lg:text-[18px] font-[500] flex items-center gap-2">
                        <div className="bg-white rounded-full p-1">
                        <IoLogoInstagram color="black" size={14}/>
                        </div>
                        Instagram
                    </Link>

                    <Link href="#" className="text-[14px] md:text-[16px] lg:text-[18px] font-[500] flex items-center gap-2">
                        <div className="bg-white rounded-full p-1">
                        <FaXTwitter color="black" size={14}/>
                        </div>
                        Twitter
                    </Link>

                    <Link href="#" className="text-[14px] md:text-[16px] lg:text-[18px] font-[500] flex items-center gap-2">
                        <div className="bg-white rounded-full p-1">
                        <FaFacebookF color="black" size={14}/>
                        </div>
                        Facebook
                    </Link>

                    </ul>
                </div>

                {/* Call Or Email Us  */}
                <div className="flex flex-col  mt-4">
                    <h1 className="underline text-slate-400">Call Or Email Us</h1>
                    <ul className="flex flex-col gap-3 mt-2">
                    <Link href="#" className="flex items-center gap-2 text-[14px] md:text-[16px] lg:text-[18px] font-[500] hover:underline">
                        <div className="bg-white rounded-full p-1">
                        <PhoneCall size={14} color="black" />
                        </div>
                        0500345678
                    </Link>
                    <a href="#" className="flex items-center gap-2 text-[14px] md:text-[16px] lg:text-[18px] font-[500] hover:underline">
                        <div className="bg-white rounded-full p-1">
                        <Mail size={14} color="black" />
                        </div>
                        eduscribe@gmail.com
                    </a>
                    </ul>
                </div>
            </div>
           
            {/* Bottom Copyright Info  */}
            <p className="absolute bottom-3 w-full mt-5 text-center text-[12px] md:text-[14px] lg:text-[16px] font-[500]">© 2026 Eduscribe. All rights reserved.</p>
        </div>
    )
}

export default Footer;