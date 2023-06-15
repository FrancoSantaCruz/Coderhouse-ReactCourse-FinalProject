import React from 'react';
import './ItemListContainer.css'
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProds } from '../../firebase/firebase';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    // useEffect(() => {
    //     const promesa = (condicional) => new Promise((res, rej) => {
    //         if (condicional) {
    //             res(BDD)
    //         }
    //         rej("Error!")
    //     })

    //     promesa(true)
    //         .then(productos => {
    //             const stockProductos = productos.filter( p => p.stock >= 1)
    //             setProductos(stockProductos)
    //         })
    //         .catch(error => console.log(error))

    // }, [])

    const { category } = useParams()

    useEffect(() => {
        // Estos fetchs eran para consultar al json local.
        // if (category) {
        //     fetch('../json/productos.json')
        //         .then(res => res.json())
        //         .then(prod => {
        //             const stockProductos = prod.filter(p => p.stock >= 1).filter(p => p.idCategoria === category)
        //             setProductos(stockProductos)
        //         })
        // } else {
        //     fetch('./json/productos.json')
        //         .then(res => res.json())
        //         .then(prod => {
        //             const stockProductos = prod.filter(p => p.stock >= 1)
        //             setProductos(stockProductos)
        //         })
        // }
        // Aca se hace lo mismo pero consultando a una base de datos:
        if (category) {
            getProds()
                .then(prod => {
                    const stockProductos = prod.filter(p => p.stock >= 1).filter(p => p.idCategoria === category)
                    setProductos(stockProductos)
                })
        } else {
            getProds()
                .then(prod => {
                    const stockProductos = prod.filter(p => p.stock >= 1)
                    setProductos(stockProductos)
                })
        }
    }, [category])

    return (
        <div className='card__container'>
            {<ItemList productos={productos} preset={"Item"} />}
        </div>
    );
}
