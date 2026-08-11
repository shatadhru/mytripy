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
import register from "./services/register";

function page() {
  const router = useRouter();

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    React.useState(false);

  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    register(formData)
  };

  return (
    <div>
      <div className="min-h-screen w-full relative bg-white">

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

          <Card className="w-full max-w-sm py-10">

            <Image
              src="/mrtripy.png"
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto mt-5 mb-4"
            />


            <CardHeader>

              <CardTitle>
                Create your account
              </CardTitle>

              <CardDescription>
                Enter your details below to create your account
              </CardDescription>


              <CardAction>
                <Button variant="link">
                  Sign In
                </Button>
              </CardAction>

            </CardHeader>



            <CardContent>

              <form onSubmit={handleSubmit}>

                <div className="flex flex-col gap-5">


                  <div className="grid gap-2">
                    <Label htmlFor="username">
                      Username
                    </Label>

                    <Input
                      id="username"
                      placeholder="johndoe"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>



                  <div className="grid gap-2">
                    <Label htmlFor="email">
                      Email
                    </Label>

                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>



                  <div className="grid grid-cols-2 gap-3">

                    <div className="grid gap-2">
                      <Label htmlFor="firstName">
                        First Name
                      </Label>

                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>


                    <div className="grid gap-2">
                      <Label htmlFor="lastName">
                        Last Name
                      </Label>

                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>

                  </div>



                  <div className="grid gap-2">

                    <Label htmlFor="password">
                      Password
                    </Label>


                    <div className="relative">

                      <Input
                        id="password"
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        className="pr-10"
                        value={formData.password}
                        onChange={handleChange}
                      />


                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword((v) => !v)
                        }
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
                      >

                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}

                      </button>

                    </div>

                  </div>




                  <div className="grid gap-2">

                    <Label htmlFor="confirmPassword">
                      Confirm Password
                    </Label>


                    <div className="relative">

                      <Input
                        id="confirmPassword"
                        type={
                          showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        className="pr-10"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />


                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword((v) => !v)
                        }
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
                      >

                        {showConfirmPassword ? (
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
                onClick={handleSubmit}
              >
                Create Account
              </Button>


              <Button
                variant="outline"
                className="w-full"
              >
                <FcGoogle className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>


            </CardFooter>


          </Card>



          <div className="mt-4 text-center">

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