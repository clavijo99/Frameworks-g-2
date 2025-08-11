import Image from "next/image";

export default function Home() {

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const names = ["juan", "camilo", "pedro", "camila", "luis"]
  const persons = [
    { nombre: "Juan", apellido: "Pérez", correo: "juan.perez@email.com", telefono: "3001234567", edad: 25 },
    { nombre: "Camila", apellido: "Gómez", correo: "camila.gomez@email.com", telefono: "3002345678", edad: 22 },
    { nombre: "Pedro", apellido: "Martínez", correo: "pedro.martinez@email.com", telefono: "3003456789", edad: 28 },
    { nombre: "Luis", apellido: "Rodríguez", correo: "luis.rodriguez@email.com", telefono: "3004567890", edad: 30 },
    { nombre: "Ana", apellido: "López", correo: "ana.lopez@email.com", telefono: "3005678901", edad: 27 },
    { nombre: "Sofía", apellido: "Ramírez", correo: "sofia.ramirez@email.com", telefono: "3006789012", edad: 24 },
    { nombre: "Carlos", apellido: "Torres", correo: "carlos.torres@email.com", telefono: "3007890123", edad: 29 },
    { nombre: "Valentina", apellido: "Morales", correo: "valentina.morales@email.com", telefono: "3008901234", edad: 23 },
    { nombre: "Andrés", apellido: "Castro", correo: "andres.castro@email.com", telefono: "3009012345", edad: 26 },
    { nombre: "María", apellido: "Suárez", correo: "maria.suarez@email.com", telefono: "3000123456", edad: 21 }
  ]
  const products = [
    {
      nombre: "Laptop Lenovo IdeaPad 3",
      descripcion: "Portátil con procesador Intel Core i5, 8GB RAM, 512GB SSD.",
      categoria: "Tecnología",
      cantidad: 10,
      precio: 2500000,
      imagen: "data:image/jpeg;base64,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"
    },
    {
      nombre: "Camiseta Nike Sportswear",
      descripcion: "Camiseta deportiva para hombre, color negro, 100% algodón.",
      categoria: "Ropa",
      cantidad: 25,
      precio: 85000,
      imagen: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/nikesportswear-camiseta.jpg"
    },
    {
      nombre: "Audífonos JBL Tune 510BT",
      descripcion: "Audífonos inalámbricos Bluetooth, hasta 40 horas de batería.",
      categoria: "Tecnología",
      cantidad: 15,
      precio: 180000,
      imagen: "https://agaval.vtexassets.com/arquivos/ids/1864186/image-b1df0fd8a58b41a58493738b96eac44d.jpg?v=638623480257900000"
    },
    {
      nombre: "Silla Ergonómica Oficina",
      descripcion: "Silla con soporte lumbar, altura ajustable y ruedas.",
      categoria: "Hogar",
      cantidad: 8,
      precio: 320000,
      imagen: "https://ergonomus.co/cdn/shop/collections/Principal-5.jpg?v=1741811754"
    },
    {
      nombre: "Cafetera Oster 12 Tazas",
      descripcion: "Cafetera eléctrica con filtro permanente y función de pausa.",
      categoria: "Electrodomésticos",
      cantidad: 12,
      precio: 145000,
      imagen: "data:image/jpeg;base64,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"
    }
  ]
  return (
    <div className="flex flex-col py-10 px-10">
      <h1 className="text-center">Taller renderizacion de listas</h1>
      <div>
        <p>1. lista de numeros</p>
        <div className="ml-10 my-10 w-10 bg-white">
          {nums.map((n, i) => <p key={i} className="text-black text-center" >{n}</p>)}
        </div>
        <p className="my-4" >2.lista de nombres</p>
        <div className="flex" >
          {names.map((n, i) => (<p key={i} className="ml-4 p-4  bg-purple-50 rounded text-black " >{n}</p>))}
        </div>
        <p className="py-4" >3.lista de personas</p>
        <div className="flex flex-col justify-center items-center ">
          {
            persons.map((p, i) => (
              <div key={i} className="w-3/4 bg-white text-black mb-10 p-10 rounded">
                <div className="flex justify-between">
                  <p>Nombre: {p.nombre}</p>
                  <p>Appellidos: {p.apellido}</p>
                </div>
                <div className="flex justify-between">
                  <p>Correo: {p.correo}</p>
                  <p>Telefono: {p.telefono}</p>
                </div>
                <p>Edad: {p.edad}</p>
              </div>
            ))
          }
        </div>
        <p className="py-2">4.listar productos</p>
        <div className="flex flex-wrap px-10 justify-center ">
          {products.map((p, i) =>
            <div key={i} className="flex flex-col w-64 h-[500px] bg-white mr-10 mb-10 rounded shadow-lg overflow-hidden">
              <img className="w-full h-1/2 object-cover" src={p.imagen} alt={p.nombre} />
              <div className="flex flex-col justify-between h-1/2 p-4">
                <h2 className="font-bold text-lg text-black mb-1">{p.nombre}</h2>
                <p className="text-gray-700 text-sm mb-2">{p.descripcion}</p>
                <p className="text-purple-700 text-xs mb-1">Categoría: {p.categoria}</p>
                <p className="text-gray-800 text-xs mb-1">Cantidad: {p.cantidad}</p>
                <p className="text-green-700 font-semibold text-base mb-2">Precio: ${p.precio.toLocaleString()}</p>
                <button className="bg-purple-600 text-white py-1 px-2 rounded hover:bg-purple-700 transition">Comprar</button>
              </div>
            </div>
          )
          }
        </div>
      </div>
    </div>
  );
}




