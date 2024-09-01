"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Input, Button, Label } from "@/components/ui";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./schema";
import * as yup from "yup";

export const RegisterForm = () => {
  type FormData = yup.InferType<typeof Schema>;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(Schema) });
  const { push } = useRouter();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // const response=await fetch('/api/register',{
      //   method:'POST',
      //   body:JSON.stringify({
      //     email,password
      //   }),
      //   headers:{
      //     'Content-Type':'application/json'
      //   }
      // })
      // if(response.ok){

      // }
      // push("/");
      console.log("test");
    } catch (error) {}
  };
  return (
    <form
      data-testid="RegisterMainForm"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-12 w[400px]"
    >
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="username" {...register("username")} />
        <p>{errors.username?.message}</p>
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Confirm Password</Label>
        <Input id="cpassword" type="password" {...register("cpassword")} />
        <p>{errors.cpassword?.message}</p>
      </div>
      <div className="w-full">
        <Button className="w-full" size={"lg"}>
          Register
        </Button>
      </div>
    </form>
  );
};
