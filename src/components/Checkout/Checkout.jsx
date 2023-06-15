import { useRef } from "react";
import './Checkout.css'
import { useCartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { createOrdenCompra, getProd, updateProd } from "../../firebase/firebase";
import { toast } from 'react-toastify';

export const Checkout = () => {

    const datForm = useRef() // Crear una referencia para consultar los valores actuales del form
    const { cart, totalPrice, emptyCart } = useCartContext()
    let navigate = useNavigate()
    const getForm = (e) => {
        // Consultar los datos del form
        e.preventDefault()
        const formInfo = new FormData(datForm.current) //Pasar de html a objeto iterable
        const usuario = Object.fromEntries(formInfo) //Pasar de objeto iterable a objeto simple

        const aux = [...cart]
        // Descontar el stock
        aux.forEach(prodCart => {
            getProd(prodCart.id).then(prodDB => {
                if (prodDB.stock >= prodCart.quantity) { //Si el stock en base de datos es mayor o igual a la cantidad del mismo producto que tengo en mi carrito, descuento el stock
                    prodDB.stock -= prodCart.quantity
                    updateProd(prodCart.id, prodDB) //Enviarle a la DB el producto descontando su stock
                } else {
                    toast.error('❌ ERROR! Stock Inválido. Está solicitando más productos del que te podemos proveer.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            })
        })

        const auxiliarMap = aux.map(p => ({
            id: p.id,
            quantity: p.quantity,
            precio: p.precio
        }))

        createOrdenCompra(usuario, totalPrice(), auxiliarMap, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions.timeZone }))
            .then(orden => {
                toast.success(`✅ Muchas gracias por su compra.
                        ID de compra: ${orden.id}
                        Por un total de: ${totalPrice()}.
                        En breve nos contactaremos para concretar el envío. :)
                        `, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                emptyCart()
                navigate("/") //Defino la ruta a la que quiero dirigir a mi usuario.
            })
            .catch(error => {
                toast.error(`❌${error}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })


        e.target.reset()
    }
    

    return (

        <>
            {
                cart.length === 0 ?
                    <>
                        <h1>Para finalizar una compra debe tener productos en el Carrito.</h1>
                        <Link to={"/"}> <button>Seguir comprando</button> </Link>
                    </>
                    :
                    <>

                        <div>
                            <div className="form__container">
                                <form onSubmit={getForm} ref={datForm} className="buyForm">

                                    <div className="form__field">
                                        <label htmlFor="nombre" className="form__name">Nombre y Apellido</label>
                                        <input type="text" className="form__input" name="nombre" id="nombre" required />
                                    </div>

                                    <div className="form__field">
                                        <label htmlFor="email" className="form__name">Email</label>
                                        <input type="email" className="form__input" name="email" id="email" required/>
                                    </div>
                                    
                                    <div className="form__field">
                                        <label htmlFor="email" className="form__name">Repetir email</label>
                                        <input type="email" className="form__input" name="email2" id="email2" required/>
                                    </div>

                                    <div className="form__field">
                                        <label htmlFor="dni" className="form__name">DNI</label>
                                        <input type="number" className="form__input" name="dni" id="dni" required/>
                                    </div>

                                    <div className="form__field">
                                        <label htmlFor="contacto" className="form__name">Número de teléfono</label>
                                        <input type="number" className="form__input" name="contacto" id="contacto" required/>
                                    </div>

                                    <div className="form__field">
                                        <label htmlFor="direccion" className="form__name">Dirección</label>
                                        <input type="text" className="form__input" name="direccion" id="direccion" required/>
                                    </div>

                                    <button type="submit" className="form__btn">Finalizar compra</button>

                                </form>
                            </div>
                        </div>

                    </>

            }


        </>



    );
}
