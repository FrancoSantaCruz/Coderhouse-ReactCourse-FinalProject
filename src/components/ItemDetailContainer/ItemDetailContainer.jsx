import React from 'react';
import { useState, useEffect } from 'react';

import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch('../json/productos.json')
        .then(res => res.json())
        .then(productos => {
            const prod = productos.find(prod => prod.id === parseInt(id))
            setItem(prod)
        })
    }, [])


    return (
        <>
          <ItemDetail item={item}/>  
        </>
    );
}
