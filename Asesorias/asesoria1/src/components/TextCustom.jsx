
/*

{
    "texto": "hola",
    "color": "red"
}

*/


export default function TextCustom({ texto, descripcion  }){


    return (
       <div>
         <p>{ texto }</p>
         <h2>{ descripcion}</h2>
       </div>
    )
}