export default function ButtonCustom({ text, click }){
    return (
        <button onClick={click} className=" rounded text-center px-4 py-2 bg-white " >{text}</button>
    )
}