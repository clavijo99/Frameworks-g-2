// gestionar el storage de la autenticación

export function getAccessToken() {
    return localStorage.getItem('access_token')
}

export function getRefreshToken() {
    return localStorage.getItem('refresh_token')
}

export function setTokens(access_token, refresh_token) {
    localStorage.setItem('access_token', access_token)
    localStorage.setItem('refresh_token', refresh_token)
}

export function clearTokens() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
}