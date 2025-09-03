'use client'

import Image from "next/image";

export default function Home() {

  var name = "juan";

  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h2>{name}</h2>

      <button onClick={ () => name = 'pepe' } className= " bg-purple-500 p-4 text-white rounded ">Cambiar el valor de nam</button>

    </div>
  );
}
