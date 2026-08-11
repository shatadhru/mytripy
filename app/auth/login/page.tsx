"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { login } from "./services/login";

function page() {
  const router = useRouter();

  const [email, SetEmail] = React.useState("");
  const [password, SetPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div>
      <div className="min-h-screen w-full relative bg-white">
        {/* Soft Yellow Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, #FFF991 0%, transparent 70%)
            `,
            opacity: 0.6,
            mixBlendMode: "multiply",
          }}
        />

        <Button
          size="icon"
          variant="ghost"
          onClick={() => router.back()}
          className="bg-white"
        >
          <ArrowLeftIcon />
        </Button>

        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center px-2">
          <Card className="w-full max-w-sm py-20">
            <Image
              src="/mrtripy.png"
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto mt-10 mb-4"
            />

            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>

              <CardAction>
                <Button variant="link">Sign Up</Button>
              </CardAction>
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
                      value={email}
                      onChange={(e) => SetEmail(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>

                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>

                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => SetPassword(e.target.value)}
                        className="pr-10"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>

            <CardFooter className="flex-col gap-2">
              <Button
                type="submit"
                className="w-full"
                onClick={() => login(email, password)}
              >
                Login
              </Button>

              <Button variant="outline" className="w-full">
                <FcGoogle className="mr-2 h-4 w-4" />
                Login with Google
              </Button>
            </CardFooter>
          </Card>

          <div className="item-center justify-center mt-4 text-center">
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
              <a href="/privacy" className="hover:text-foreground">
                Privacy
              </a>

              <span>•</span>

              <a href="/terms" className="hover:text-foreground">
                Terms
              </a>

              <span>•</span>

              <a href="/cookies" className="hover:text-foreground">
                Cookies
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center justify-center px-2">
          <p className="mt-3 text-center text-xs text-muted-foreground">
            © 2026 Zaroo. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;