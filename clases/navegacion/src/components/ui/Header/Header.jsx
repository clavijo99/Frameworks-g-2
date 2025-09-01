import Image from "next/image"


const banner = '/banner.webp'



export default function Header(){
    return (
        <header className="" >
            <Image src={banner}  fill />
        </header>
    )
}