
// componente para manejar las imagenes en next - esta optimizado
import Image from "next/image"
// componente para los links
import Link from "next/link"


const banner = '/banner.webp'



export default function Header(){
    return (
        <header className=" flex flex-col w-full h-[500px] bg-white relative " >
            <Image src={banner}  fill />

            <nav className=" flex justify-between text-black  relative">
                <Link href='/' className="mr-10" > Logo de mi Tienda </Link>
                <div>
                    <Link href='/' >Home</Link>
                    <Link href='/services'>Servicios</Link>
                    <Link href='/contact' >Contacto</Link>
                    <Link href='/about' >Informacion</Link>
                </div>
            </nav>

        </header>
    )
}