// interceptors/apiClient.js

import { getAccessToken, getRefreshToken, setTokens, clearTokens } from './auth'
import { routesPublics } from './routesPublics'

export async function apiFetch(url, options = {}) {

    const isPublicRoute = routesPublics.some( route => url.startsWith(route))

    let access_token = getAccessToken()

    const headers = {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
        ...(isPublicRoute ? {} : { 'Autorization': `Bearer ${access_token}` })
    }

    const  config = {
        ...options,
        headers
    }

    let response = await fetch(url, config)

    // verificar si el token ha expirado
    if(response.status === 401 && !isPublicRoute){
        const refresh_token = getRefreshToken()

        //TODO: llamar al endpoint de refresh token
        const isRefreshed = await refreshAccessToken(refresh_token)

        if(isRefreshed){
            access_token = getAccessToken()
            const retryHeaders = {
                ...headers,
                'Autorization': `Bearer ${access_token}`
            }
            response = await fetch(url, {...options, headers: retryHeaders })
        }else{
            clearTokens()
            throw new Error('No se pudo refrescar el token')
        }
    }
    return response

}


async function refreshAccessToken(refresh_token) {
    try{
        // TODO: llamar al endpoint de refresh token
        // este enpoint aun no existe se debe de crear en los api routes
        const response = await fetch('/api/auth/refresh-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refresh_token })
        })

        if(!response.ok) return false

        const data = await response.json()

        if(data.access_token && data.refresh_token){
            setTokens(data.access_token, data.refresh_token)
            return true
        }
        return false
    } catch(error){
        clearTokens()
        return false
    }
}
