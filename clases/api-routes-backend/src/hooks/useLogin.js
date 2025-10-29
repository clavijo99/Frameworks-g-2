'use client'

import { apiFetch } from '@/lib/apiClient'
import {  useState } from 'react'

export const useLogin = () => {

    const [ loading, setloading ] = useState(false)
    const [ error, setError ] = useState(null)
    const [ data, setData ] = useState(null)

    const login = async (email, password) => {
        try{
            setloading(true)
            setError(null)

            const response = await apiFetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({email, password})
            })

            if(response.status != 200){
                return false;
            }
            const dataJson = await response.json();
            setData(dataJson)

            return true;
        } catch(err){

        } finally {

        }
    }
    return { login, loading, error, data }
}