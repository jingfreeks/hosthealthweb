"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Input, Button, Label } from "@/components/ui";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./schema";
import * as yup from "yup";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useSignupMutation } from "@/slice/authApi";

export const RegisterForm = () => {
  type FormData = yup.InferType<typeof Schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(Schema) });
  const { push } = useRouter();
  const [signup, { isLoading, error }] = useSignupMutation();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await signup({
        username: data.username,
        password: data.password,
      }).unwrap();
      push("/");
    } catch (error) {
      console.log("error", error);
    }
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
        <Button disabled={isLoading} className="w-full" size={"lg"}>
          {isLoading ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            "Register"
          )}
        </Button>
      </div>
    </form>
  );
};
