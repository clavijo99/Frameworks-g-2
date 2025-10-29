'use client'

import Image from "next/image";
import { useLogin } from '@/hooks/useLogin'
import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, data, loading, error } = useLogin();

  async function handlLogin() {
    try{
      const response = await login(email, password);
      console.log(response)
      console.log({data})
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Home</h1>
      <div className="flex flex-col justify-center items-center">
        <h1>Login</h1>
        <input type="text" name="" id="" className="border border-white rounded mt-4 p-1" placeholder="Correo" onChange={ (e) => setEmail(e.target.value) } />
        <input type="password" className="border border-white rounded my-4 p-1" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-white p-2 text-black rounded cursor-pointer " onClick={handlLogin} >Iniciar sesion</button>
      </div>
    </div>
  );
}
