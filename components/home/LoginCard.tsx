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

const LoginCard = () => {
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
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm text-[var(--primaryTheme)]"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full py-5 cursor-pointer bg-[var(--secondaryTheme)]">
              Login
            </Button>
            <Button variant="outline" className="w-full flex items-center gap-2 cursor-pointer py-5">
              <FcGoogle />
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full cursor-pointer flex items-center gap-2 py-5">
              <FaFacebook />
              Continue with Facebook
            </Button>
          </CardFooter>
        </Card>   
    )
}

export default LoginCard;