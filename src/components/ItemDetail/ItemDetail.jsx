import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';
import './ItemDetail.css'




export const ItemDetail = ({ item }) => {
    const { addItem } = useCartContext()
    const onAdd = (contador) => { //Aquí agrego al carrito
        addItem(item, contador)
    }

    return (
        <div className='detailProduct__container'>
            <div className='detailProduct__imgContainer'>
                <img src={item.img} className='detailProduct__img' alt={`Img de ${item.nombre}`} />
            </div>
            <div className='detailProduct__desc'>
                <p className='detailProduct__marca'>{item.marca}</p>
                <p className='detailProduct__nombre'>{item.nombre}</p>
                <p className='detailProduct__precio'>ARS${item.precio}</p>
                <p className='detailProduct__stock'>Disponibles:{item.stock}</p>
                <ItemCount valorInit={1} min={1} max={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    );
}
