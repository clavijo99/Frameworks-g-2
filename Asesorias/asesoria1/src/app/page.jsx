import TextCustom  from '@/components/TextCustom'


export default function Home() {



  const name = "brayan camilo clavijo gomez";

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

  const personas = [
    { nombre: "Juan", apellido: "Pérez", edad: 25, identificacion: "1001" },
    { nombre: "Ana", apellido: "Gómez", edad: 30, identificacion: "1002" },
    { nombre: "Luis", apellido: "Martínez", edad: 22, identificacion: "1003" },
    { nombre: "María", apellido: "Rodríguez", edad: 28, identificacion: "1004" },
    { nombre: "Carlos", apellido: "López", edad: 35, identificacion: "1005" },
    { nombre: "Sofía", apellido: "Ramírez", edad: 27, identificacion: "1006" },
    { nombre: "Miguel", apellido: "Torres", edad: 24, identificacion: "1007" },
    { nombre: "Laura", apellido: "Hernández", edad: 29, identificacion: "1008" },
    { nombre: "Andrés", apellido: "Jiménez", edad: 31, identificacion: "1009" },
    { nombre: "Paula", apellido: "Castro", edad: 26, identificacion: "1010" }
  ];


  const active = true



  return (
    <div className="font-sans  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-red-600 text-2xl font-bold">
      { /* className = class */}
      {name}
      <div>
        {numeros.map((numero, index) => (
          <div key={index} >
            <p>{numero}</p>
          </div>
        ))}
      </div>



      <div className=" mt-20 bg-black p-10 ">
        {
          personas.map(
            (persona) => (
              <div key={persona.identificacion} className=" flex  ">
                <h2 className="mr-2">{persona.nombre}</h2>
                <h3>{persona.apellido}</h3>
              </div>
            )
          )
        }
      </div>

      <div>
        {
          active ? <div className=" w-10 h-10 bg-blue-300" ></div> : <div className=" w-10 h-10 bg-red-600 " ></div>
        }
      </div>

      <div>
        {
            active && <h1>es activo</h1>
        }
      </div>

      <TextCustom texto="hola" descripcion="texto por defecto" ></TextCustom>
      <TextCustom  texto="jajajaja" descripcion="jvhcgvscgvscsvcygsdvchgsd cj s" />

    </div>
  );
}
