'use client'

import { usePathname } from 'next/navigation'

import {
    Header,
    Footer,
} from '@/components/index'

export default function LayoutClient({ children }) {

    const pathName = usePathname()
    // areglo de pagina que no quiero que aparesca el header y footer
    const hiddePaths = ['/login', '/register']

    // ignorar las paginas del areglo
    const hidde = hiddePaths.includes(pathName)

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/*  si la ruta actual no se encuentra en el array mostramos el header */}
            {!hidde && <Header />}
            <main style={{
                flex: 1
            }}>
                {children}
            </main>
            {!hidde && <Footer />}
        </div>
    )
}