import React from 'react';

export const CartWidget = ({cantidadCarrito}) => {
    return (
        <div className="__cart">
            <a href='/'><i className="fa-solid fa-cart-plus" style={{"color": "#ebc400"}}/></a>
            <p>{cantidadCarrito}</p>
        </div>
    );
}
