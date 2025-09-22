const users = [
    {
        nombre: "Juan",
        apellido: "Pérez",
        email: "juan.perez@example.com",
        telefono: "3001234567",
        contraseña: "password123"
    },
    {
        nombre: "Maria",
        apellido: "Gomez",
        email: "maria.gomez@example.com",
        telefono: "3109876543",
        contraseña: "securepass456"
    }
];

// http:://localhost:3000/api/{carpeta "users"}
 // GET, POST , DELETE, PATCH, PUT
export async function GET() {

    // INSTANCE de la clase Response ( body , cabezeras )
    // JSON.stringfy me permite convertir un objeto a un string
    return new Response(JSON.stringify(users), {
        // status es el codigo de la peticion que va desde 100 al 500
        status: 200,
        headers: {
            // vamos a manejas respuestas en en formato json
            'Content-Type': 'application/json'
        }
    });
}