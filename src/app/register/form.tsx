'use client'
import React,{useState} from "react";
import { useRouter } from 'next/navigation';
import { Input, Button,Label } from "@/components/ui";
export const RegisterForm = () => {
  const [email,setEmail]=useState<string>('')
  const [password,setPassword]=useState<string>('')
  const { push } = useRouter();
  const onSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try{
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
      push('/')
    }catch(error){

    }
  };
  return (
    <form  data-testid="RegisterMainForm" onSubmit={onSubmit}
    className="space-y-12 w[400px]">

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Confirm Password</Label>
        <Input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <div className="w-full">
        <Button className="w-full" size={"lg"}>Register</Button>
      </div>
 
    </form>
  );
};
