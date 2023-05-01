import React from 'react';
import { useCount } from '../../hooks/useCount.js'
import './ItemCount.css'

export const ItemCount = ({ valorInit, min, max, onAdd }) => {

    const { count, sum, minus, reset } = useCount(valorInit, min, max)

    return (
        <div className='ItemCount__container'>


            <div className='counter__container'>
                <button className='ItemCount__minus' onClick={() => { minus() }}>-</button>
                <div className='ItemCount__count' > {count} unidades</div>
                <button className='ItemCount__sum' onClick={() => { sum() }}>+</button>
            </div>


            <div className='ItemCount__btns'>
                <button className='ItemCount__reset' onClick={() => { reset() }}>Reset</button>
                <button className='ItemCount__addCart' onClick={() => onAdd(count)}>Agregar al Carrito</button>
            </div>


        </div>
    );
}
