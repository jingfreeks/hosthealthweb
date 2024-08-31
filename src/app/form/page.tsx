'use client'

import React,{useState} from 'react'

export const Form=()=> {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const onSubmit=(e:React.FormEvent)=>{

    }
  return (
    // <form onSubmit={onSubmit} className='space-y-12 w-full sm:w-[400px]'>
    //     <div className='grid w-full items-center gap-1.5'>
    //         <Label htmlFor="email">Email</Label>
    //         <Input 
    //             className="w-full"
    //             required
    //             value={email}
    //             onChange={(e)=>setEmail(e.target.value)}
    //             id="email"
    //             type="email"
    //         />
    //     </div>
    //     <div>
    //         <Label htmlFor="password">Password</Label>
    //         <Input 
    //             className="w-full"
    //             required
    //             value={password}
    //         />
    //     </div>
    // </form>
    <div>test</div>
  )
}
