'use client'

import Image from "next/image";
import { useLogin } from '@/hooks/useLogin'

export default function Home() {

  const { login } = useLogin();

  async function handlLogin() {
    
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Home</h1>
    </div>
  );
}
