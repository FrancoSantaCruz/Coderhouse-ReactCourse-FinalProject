import {useState, createContext, useContext} from 'react';

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {

    const [cart, setCart] = useState([])

    // Agregar Producto
    // Quitar Producto
    // Vaciar Cart
    // Obtener cantidades (subtotales)
    // Obtener Total Price
    // Buscar Producto

    const isInCart = (id) => {
        // Find => Obj ... Some => Booleano
        return cart.some(prod => prod.id === id)
    }

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){ //Consulto si el producto existe o no en el cart

            const index = cart.findIndex(prod => prod.id === item.id)
            const aux = [...cart]
            aux[index].quantity = quantity
            setCart(aux)

        } else {
            // Creo un nuevo objeto con los datos ingresados
            const newItem = {
                ...item,
                quantity
            }
            // const aux = cart
            // aux.push(newItem)
            // setCart(aux)

            setCart([...cart, newItem]) // Genero una copia del carrito + el nuevo producto
            
        }
    }

    const removeItem = (id) => {
        // const aux = [...cart]
        // const index = aux.findIndex(prod => prod.id === id)
        // setCart(aux.splice(index,1))

        setCart(cart.filter(prod => prod.id !== id)) //Traeme todos los productos que no tengan el id ingresado
    }

    const emptyCart = () => {
        setCart([])
    }

    const getItemQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.quantity * prod.precio), 0)
    }

    
    return (
        <CartContext.Provider value={{cart, addItem, removeItem, emptyCart, totalPrice, getItemQuantity}}>
            {props.children}
        </CartContext.Provider>
    )
}
