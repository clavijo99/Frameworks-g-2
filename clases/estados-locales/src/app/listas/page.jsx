'use client'

import InputCustom from "@/components/InputCustom";
import { useState } from "react";
import Image from "next/image";

export default function Listas(){

    const productos = [
        {
            titulo: "Laptop Lenovo",
            descripcion: "Laptop potente para trabajo y estudio.",
            imagen: "https://via.placeholder.com/150?text=Laptop+Lenovo",
            categoria: "Tecnología"
        },
        {
            titulo: "Camiseta Deportiva",
            descripcion: "Camiseta cómoda para hacer ejercicio.",
            imagen: "https://via.placeholder.com/150?text=Camiseta+Deportiva",
            categoria: "Ropa"
        },
        {
            titulo: "Auriculares Bluetooth",
            descripcion: "Auriculares inalámbricos con gran sonido.",
            imagen: "https://via.placeholder.com/150?text=Auriculares+Bluetooth",
            categoria: "Tecnología"
        },
        {
            titulo: "Libro de Programación",
            descripcion: "Aprende a programar desde cero.",
            imagen: "https://via.placeholder.com/150?text=Libro+Programacion",
            categoria: "Libros"
        },
        {
            titulo: "Silla Ergonómica",
            descripcion: "Silla cómoda para largas jornadas.",
            imagen: "https://via.placeholder.com/150?text=Silla+Ergonomica",
            categoria: "Hogar"
        },
        {
            titulo: "Smartphone Samsung",
            descripcion: "Teléfono inteligente de última generación.",
            imagen: "https://via.placeholder.com/150?text=Smartphone+Samsung",
            categoria: "Tecnología"
        },
        {
            titulo: "Zapatos Deportivos",
            descripcion: "Ideales para correr y caminar.",
            imagen: "https://via.placeholder.com/150?text=Zapatos+Deportivos",
            categoria: "Calzado"
        },
        {
            titulo: "Reloj Inteligente",
            descripcion: "Monitorea tu actividad diaria.",
            imagen: "https://via.placeholder.com/150?text=Reloj+Inteligente",
            categoria: "Tecnología"
        },
        {
            titulo: "Mochila Escolar",
            descripcion: "Espaciosa y resistente para tus libros.",
            imagen: "https://via.placeholder.com/150?text=Mochila+Escolar",
            categoria: "Accesorios"
        },
        {
            titulo: "Botella de Agua",
            descripcion: "Mantente hidratado todo el día.",
            imagen: "https://via.placeholder.com/150?text=Botella+Agua",
            categoria: "Deportes"
        }
    ];

    const categorias = [...new Set(productos.map(p => p.categoria))];

    const [search, setSearch] = useState()
    const [productosFilter, setProductsFilter] = useState(productos)

    return (
        <div>
            <h1>Listado de Productos</h1>

            <InputCustom isPassword={false} setValue={setSearch} />

            <div className="flex mb-4 h-36 w-full bg-red-500" >
                {categorias.map( (c,i) => (
                    <div key={i} className="p-2 mr-2 border mt-4 hover:cursor-pointer"  >
                        <p>{c}</p>
                    </div>
                ) )}
            </div>

            <div className="  bg-pink-300">
                {
                    productosFilter.map( (product, index) => (
                        <div className=" w-60 h-72 mb-10 mr-5 border p-10">
                            <h2>{ product.titulo }</h2>
                            <div className=" w-full h-32 ">
                                <Image src={product.imagen} fill alt={product.titulo} objectFit="cover" />
                            </div>
                            <p>{product.descripcion}</p>
                        </div>
                    ) )
                }
            </div>
            
        </div>
    );

}