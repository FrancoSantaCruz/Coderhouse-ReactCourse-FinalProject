import React from 'react';
import { useState, useEffect } from 'react';

import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getProd } from '../../firebase/firebase';
export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        // Aca consultaba por un solo producto del json local
        // fetch('../json/productos.json')
        // .then(res => res.json())
        // .then(productos => {
        //     const prod = productos.find(prod => prod.id === parseInt(id))
        //     setItem(prod)
        // })
        // Ahora hago lo mismo pero desde firebase
        getProd(id)
            .then(prod => {
                setItem(prod)
            })
    }, [])


    return (
        <>
            <ItemDetail item={item} />
        </>
    );
}
