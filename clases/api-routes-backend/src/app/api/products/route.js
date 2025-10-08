import pool from '@/lib/db';

export async function GET(req) {
    try {
        const result = await pool.query('SELECT * FROM products');

        return Response.json({
            data: result.rows,
            message: 'List of products',
        }, { status: 200 })
    } catch (error) {
        console.log('Listar products error', error);
        return new Response('Internal Error', { status: 500 });
    }
}


export async function POST(req) {
    try {

        try {

        } catch (error) {
            console.log(error)
            return new Response('Error de autenticacion', { status: 401 })
        }

        const { name, description, price, stock } = await req.json();
        const result = await pool.query(
            'INSERT INTO products ( name, description, price, stock) VALUES (  $1 , $2, $3, $4 ) RETURNING  *', [name, description, price, stock]
        )
        return Response.json({
            data: result.rows[0],
            message: 'Product created',
        }, { status: 201 })

    } catch (error) {
        console.log('Crear product error', error);
        return new Response('Internal Error', { status: 500 });
    }
}

