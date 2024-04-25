"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Typography } from "src/components/ui/typography";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signupSchema } from "../schema";

function SignupForm() {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onChange",
  });

  const onSubmit = async () => {};

  return (
    <Card className="w-[550px] py-4 border-transparent md:border-border">
      <CardHeader>
        <CardTitle className="text-center text-xl">Join us today!</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password..."
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm your password..."
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full bg-accent-secondary/80 hover:bg-accent-secondary text-white"
              type="submit"
            >
              Login
            </Button>
          </form>
          <div className="w-full  h-[1px] bg-border flex items-center justify-center my-8 text-xs after:content-['or'] after:w-[30px] after:h-[30px] after:flex after:items-center after:justify-center after:rounded-full  after:bg-theme-primary after:absolute" />
          <div className="flex items-center justify-center flex-col gap-2">
            <Button className="w-full hover:bg-transparent ring-blue-600 bg-transparent text-primary/70 hover:text-primary/90 p-4 group/fb">
              <span className="mr-2  bg-blue-600 group-hover/fb:bg-blue-500 text-white flex items-center justify-center w-[30px] aspect-square rounded-full">
                <FaFacebookF />
              </span>
              Create using Facebook
            </Button>
            <Button className="w-full hover:bg-transparent ring-blue-600 bg-transparent text-primary/70 hover:text-primary/90 p-4">
              <span className="mr-2 flex items-center justify-center w-[30px] aspect-square rounded-full">
                <FcGoogle size={24} />
              </span>
              Create using Google
            </Button>
            <Link href="/">
              <Typography className="text-center text-xs underline text-primary/50">
                Signin instead
              </Typography>
            </Link>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
}

export default SignupForm;
