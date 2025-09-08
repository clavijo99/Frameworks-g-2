'use client'

import Image from "next/image";
import { use, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {

  const [ name , setName ] = useState("Pepito");
  const [ active, setActive ] = useState(false);

  const [ email, setEmail ] = useState("")
  const [password, setPassword] = useState()

  const router = useRouter()

  function ingresar(){
     if( email === 'bclavijogomez@gmail.com' && password === 'admin123' ){
      alert("ingreso exitoso")
      router.push('/dasboard')
     }else{
      alert("La credeneciales son incorrectas")
     }
  }


  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h2>{name}</h2>

      <button onClick={ () => setName("camilo") } className= " bg-purple-500 p-4 text-white rounded ">Cambiar el valor de nombre</button>
      <button onClick={() => setActive(!active)}>Active</button>
      { active && <div className="w-20 h-20 bg-red-700" ></div> }

      <div className="flex flex-col">
        <input className="bg-pink-500" type="text" name="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
        <input className="bg-pink-700" type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={ ingresar } >Mostrar datos</button>
      </div>
    </div>
  );
}
