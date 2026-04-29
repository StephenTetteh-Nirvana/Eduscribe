"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const RegisterCard = () => {
  const [optionSelected,setOptionSelected] = useState("email")

    return (
      <Card className="w-full max-w-sm">
        {/* Navigate back to homepage  */}
        <Link href="/">
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <GraduationCap size={25} className="text-[var(--primaryTheme)]"/>
            <h1 className="text-center font-[900] text-[var(--primaryTheme)] text-[18px]">EDUSCRIBE</h1> 
          </div>
        </Link>

        <CardHeader>
          <CardTitle>Create a new account</CardTitle>
          <CardDescription>
            Enter your details below to create an account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              {optionSelected === "email" ? (
                <div className="grid gap-2">
                  <div className={`${optionSelected === "email" ? "flex items-center justify-between" : "hidden"}`}>
                    <Label htmlFor="email">Email</Label>
                    <CardAction 
                      className="text-[var(--primaryTheme)] font-[700] cursor-pointer"
                    >
                      <Button 
                        variant="ghost" 
                        className="cursor-pointer"
                        onClick={()=>setOptionSelected("phoneNumber")}
                      >
                        Use phone number instead ? 
                      </Button>
                    </CardAction>
                  </div>
                  <Input 
                    id="phoneNumber" 
                    type="number" 
                    required 
                    className="py-5 border border-slate-300" 
                  />
                </div>
              ) : (
                <div className="grid gap-2">
                  <div className={`${optionSelected === "phoneNumber" ? "flex items-center justify-between" : "hidden"}`}>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <CardAction 
                      className="text-[var(--primaryTheme)] font-[700] cursor-pointer"
                    >
                      <Button 
                        variant="ghost" 
                        className="cursor-pointer"
                        onClick={()=>setOptionSelected("email")}
                      >
                        Use email instead ? 
                      </Button>
                    </CardAction>
                  </div>
                  <Input 
                    id="phoneNumber" 
                    type="number" 
                    required 
                    className="py-5 border border-slate-300" 
                  />
                </div>
              )}


            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full py-5 cursor-pointer bg-[var(--secondaryTheme)]">
            Register
          </Button>
          <Button variant="outline" className="w-full flex items-center gap-2 cursor-pointer py-5">
            <FcGoogle />
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full cursor-pointer flex items-center gap-2 py-5">
            <FaFacebook />
            Continue with Facebook
          </Button>

          {/* Link to sign up  */}
          <h2 className="mt-3">Already got an account? 
              <Link href="/login">
                <span className="text-[var(--primaryTheme)] font-[700]"> Sign In</span>
              </Link>
          </h2>
        </CardFooter>
      </Card>   
    )
}

export default RegisterCard;