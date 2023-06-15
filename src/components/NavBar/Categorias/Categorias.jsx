import React from 'react';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import './Categorias.css'

export const Categorias = memo(() => {
    return (
        <div className='nav-col izq'>
            <Link className='indice' to={'/'}><p className='indice' >Inicio</p></Link>
            <Link className='indice' to={`/category/Exclusivos`}><p className='indice'> Exclusivos </p></Link>
            <Link className='indice' to={`/category/Recomendados`}><p className='indice'> Recomendados </p></Link>
            <Link className='indice' to={`/category/Mas-Vendido`}><p className='indice'> Más Vendido </p></Link>
            <Link className='indice' to={`/category/Economicos`}><p className='indice'> Económicos </p></Link>
        </div>
    )
})