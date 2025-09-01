
// componente para manejar las imagenes en next - esta optimizado
import Image from "next/image"
// componente para los links
import Link from "next/link"


const banner = '/banner.webp'



export default function Header() {
    return (
        <header className=" flex flex-col w-full h-[500px] bg-white relative " >
            <Image src={banner} fill />

            <nav className=" flex justify-between text-black  relative pt-6 px-4 ">
                <div className=" flex ">
                    <Link href='/' className="mr-10" > Logo de mi Tienda </Link>
                    <div className=" hidden sm:flex " >
                        <Link className=" mr-4 hover:text-red-500 hover:border-b-2" href='/' >Home</Link>
                        <Link className=" mr-4 hover:text-red-500 hover:border-b-2" href='/services'>Servicios</Link>
                        <Link className=" mr-4 hover:text-red-500 hover:border-b-2" href='/contact' >Contacto</Link>
                        <Link className=" mr-4 hover:text-red-500 hover:border-b-2" href='/about' >Informacion</Link>
                    </div>
                </div>
                <div>
                    <Link className="hover:border-b-2 hover:text-red-500 hover:border-red-600" href='/login' >Iniciar sesion</Link>
                </div>
            </nav>

        </header>
    )
}