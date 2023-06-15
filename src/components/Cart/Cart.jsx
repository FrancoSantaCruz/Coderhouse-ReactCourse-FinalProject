import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { ItemList } from '../ItemList/ItemList';
export const Cart = () => {

    const { cart, totalPrice, emptyCart } = useCartContext()

    return (
        <>
            { 
            cart.length === 0 ?  

                <>
                    <h1> Carrito Vacío </h1>
                    <button><Link to={'/'}>Volver</Link></button>
                </>   

            :   
                
                <div>
                    { < ItemList productos={cart} preset={"ItemCart"} /> }
                    <div>
                        <p>Total: {totalPrice()}</p>
                        <button onClick={() => emptyCart()}>Vaciar Carrito</button>
                        <Link to={"/"}> <button>Seguir comprando</button></Link>
                        <Link to={"/checkout"}><button>Finalizar</button></Link>
                    </div>
                </div> 

            }
        </>
    );
}

