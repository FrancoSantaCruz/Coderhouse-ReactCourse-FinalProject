import { useCartContext } from "../../context/CartContext";
import './ItemCart.css'
export const ItemCart = ({item}) => {
    const { removeItem } = useCartContext()

    return (
        <div className='card'>
            <img src={item.img} className='card__img' alt={`Img de ${item.nombre}`} />
            <div className='card__desc'>
                <p className='card__nombre'>{item.nombre}</p>
                <p className='card__marca'>{item.marca}</p>
                <p className='card__precio'>Precio x unidad: ARS${item.precio}</p>
                <p className='card__precio'>Cantidad: {item.quantity}</p>
                <p className='card__precio'>Subtotal: ARS${item.precio * item.quantity}</p>
                <button onClick={() => removeItem(item.id)} className="deleteBtn">Eliminar</button>
            </div>
        </div>
    );
}

