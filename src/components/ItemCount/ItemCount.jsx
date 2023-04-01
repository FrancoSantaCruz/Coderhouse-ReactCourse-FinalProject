import React from 'react';
import { useState } from 'react';
import './ItemCount.css'

export const ItemCount = () => {
    const [contador, setContador] = useState(1)

    const sum = () => {
        setContador(contador + 1)
    }

    const res = () => {
        setContador(contador - 1)
    }

    return (
        <div className='ItemCount __container'>
            <button onClick={() => { res() }}>-</button>
            {contador}
            <button onClick={() => { sum() }}>+</button>
        </div>
    );
}
