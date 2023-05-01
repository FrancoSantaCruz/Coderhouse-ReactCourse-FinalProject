import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

export const Item = ({ item }) => {
    return (
        <div className='card'>
            <img src={item.img} className='card__img' alt={`Img de ${item.nombre}`} />
            <div className='card__desc'>
                <p className='card__nombre'>{item.nombre}</p>
                <p className='card__marca'>{item.marca}</p>
                <p className='card__precio'>ARS${item.precio}</p>
                <div className='card__detailBar'>
                <p className='card__stock'>{item.stock} unidades</p>
                <Link className='card__link' to={`/product/${item.id}`}><button className='card__btn'>Detalle</button></Link>
                </div>
            </div>
        </div>
    );
}
