import React from 'react';
import './Cart.css'
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

                    <div className='ItemCart__container'>
                        {< ItemList productos={cart} preset={"ItemCart"} />}
                        <div className='Cart__info'>
                            <p className='totalPrice'>Total: {totalPrice()}</p>
                            <div>
                                <button className='Cart__btns' onClick={() => emptyCart()}>Vaciar Carrito</button>
                                <Link to={"/"}> <button className='Cart__btns'>Seguir comprando</button></Link>
                                <Link to={"/checkout"}><button className='Cart__btns'>Finalizar</button></Link>
                            </div>
                        </div>
                    </div>

            }
        </>
    );
}

