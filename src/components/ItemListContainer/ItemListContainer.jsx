import React from 'react';
import './ItemListContainer.css'
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

// const BDD = [
//     {
//         "id": 1,
//         "idCategoria": 1,
//         "nombre": "Blended Scotch Whisky",
//         "marca": "Grant's Triple Wood",
//         "precio": 6999,
//         "stock": 12,
//         "img": "img/prod1.png"
//     },
//     {
//         "id": 2,
//         "idCategoria": 2,
//         "nombre": "Tennessee Whiskey",
//         "marca": "Jack Daniel's",
//         "precio": 7699,
//         "stock": 8,
//         "img": "img/prod2.png"
//     },
//     {
//         "id": 3,
//         "idCategoria": 3,
//         "nombre": "Red Label 750ml",
//         "marca": "Johnnie Walker",
//         "precio": 6299,
//         "stock": 10,
//         "img": "img/prod3.png"
//     },
//     {
//         "id": 4,
//         "idCategoria": 4,
//         "nombre": "Signature Craft 12yo Bourbon",
//         "marca": "Jeam Beam",
//         "precio": 60199,
//         "stock": 8,
//         "img": "img/prod4.png"
//     },
//     {
//         "id": 5,
//         "idCategoria": 5,
//         "nombre": "Whisky Nacional",
//         "marca": "Premium",
//         "precio": 3099,
//         "stock": 41,
//         "img": "img/prod5.png"
//     },
//     {
//         "id": 6,
//         "idCategoria": 6,
//         "nombre": "Scotch Whisky",
//         "marca": "White Horse",
//         "precio": 2511,
//         "stock": 28,
//         "img": "img/prod6.png"
//     },
//     {
//         "id": 7,
//         "idCategoria": 7,
//         "nombre": "Blue Label",
//         "marca": "Johnnie Walker",
//         "precio": 74389,
//         "stock": 8,
//         "img": "img/prod7.png"
//     },
//     {
//         "id": 8,
//         "idCategoria": 8,
//         "nombre": "Blended Scotch Whisky 12yo",
//         "marca": "Chivas Regal",
//         "precio": 10400,
//         "stock": 19,
//         "img": "img/prod8.png"
//     },
//     {
//         "id": 9,
//         "idCategoria": 9,
//         "nombre": "Blenders Pride",
//         "marca": "Seagram's",
//         "precio": 14999,
//         "stock": 18,
//         "img": "img/prod9.png"
//     },
//     {
//         "id": 10,
//         "idCategoria": 10,
//         "nombre": "Highland Single Malt",
//         "marca": "The Dalmore King Alexander III",
//         "precio": 149900,
//         "stock": 4,
//         "img": "img/prod10.png"
//     },
//     {
//         "id": 11,
//         "idCategoria": 11,
//         "nombre": "Scotch 21yo Ruby",
//         "marca": "Royal Salute",
//         "precio": 51149,
//         "stock": 10,
//         "img": "img/prod11.png"
//     }
// ]

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

        if (category) {
            fetch('../json/productos.json')
                .then(res => res.json())
                .then(prod => {
                    const stockProductos = prod.filter(p => p.stock >= 1).filter(p => p.idCategoria === category)
                    setProductos(stockProductos)
                })
        } else {
            fetch('./json/productos.json')
                .then(res => res.json())
                .then(prod => {
                    const stockProductos = prod.filter(p => p.stock >= 1)
                    setProductos(stockProductos)
                })
        }


    }, [category])

    return (
        <div className='card__container'>
            {<ItemList productos={productos} />}
        </div>
    );
}
