'use client'

import {  useState } from 'react'

export const useLogin = () => {

    const [ loading, setloading ] = useState(false)
    const [ error, setError ] = useState(null)
    const [ data, setData ] = useState(null)

    const login = async (email, password) => {
        try{
            setloading(true)
            setError(null)

            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password})
            })

            if(!response.ok) throw new Error('Credenciales erroneas')

            const dataJson = await response.json();
            setData(dataJson)

            return dataJson;
        } catch(err){

        } finally {

        }
    }
    return { login, loading, error, data }
}