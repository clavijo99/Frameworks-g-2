import pool from '@/lib/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req) {
    
    try{
        const { email, password } = await req.json();

        const verifyUser = await pool.query(
            "SELECT * FROM users WHERE email = $1", [email]
        )

        if( verifyUser.rows.length  > 0){

        }

        return Response.json({message: "El email no existe"})

    } catch (error) {
        console.log(error)
        return new Response('Error interno del servidor', { status: 500 })
    }
}