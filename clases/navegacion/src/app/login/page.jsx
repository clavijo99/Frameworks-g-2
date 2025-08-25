'use client'

import { useRouter } from 'next/navigation'

import { ButtonCustom } from "@/components"


export default function Login() {


    const router = useRouter()

    return (
        <div className='flex flex-col' >
            <h2>login</h2>
            <ButtonCustom text='Ingresar' click={() => router.push('/')} />
            <ButtonCustom text='Registrar' click={() => router.push('/register')} />

        </div>
    )
}