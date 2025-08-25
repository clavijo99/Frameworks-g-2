'use client'

import { useRouter  } from 'next/navigation'

import { ButtonCustom } from "@/components"


export default function Login(){

    
    const router = useRouter()

    return(
        <div>
            <h2>login</h2>
            <ButtonCustom text='Ingresar' />
        </div>
    )
}