import { useCartContext } from "../../context/CartContext";
import './CartWidget.css'
import { Link } from 'react-router-dom';

export const CartWidget = () => {

    const { getItemQuantity } = useCartContext()

    return (
        <>
            <button className="__cart">
                <Link to={'/cart'}>
                    <i className="fa-solid fa-cart-plus" style={{ "color": "#ebc400" }} />
                    {getItemQuantity() > 0 && <span className="__cantCarrito">{getItemQuantity()}</span>}
                </Link>
            </button>
        </>
    );
}
