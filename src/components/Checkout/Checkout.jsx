import { useRef } from "react";

export const Checkout = () => {

    const datForm = useRef() // Crear una referencia para consultar los valores actuales del form

    const getForm = (e) => {
        // Consultar los datos del form
        e.preventDefault()
        const formInfo = new FormData(datForm.current) //Pasar de html a objeto iterable
        const usuario = Object.fromEntries(formInfo) //Pasar de objeto iterable a objeto simple
        console.log(usuario) 
        e.target.reset()
    }

    return (
        <div>
            <div className="form__container">
                <form onSubmit={getForm} ref={datForm}>

                    <div className="form__field">
                        <label htmlFor="nombre" className="form__name">Nombre y Apellido</label>
                        <input type="text" className="form__input" name="nombre" required/>
                    </div>
                    
                    <div className="form__field">
                        <label htmlFor="email" className="form__name">Email</label>
                        <input type="email" className="form__input" name="email" />
                    </div>

                    <div className="form__field">
                        <label htmlFor="email" className="form__name">Repetir email</label>
                        <input type="email" className="form__input" name="email2" />
                    </div>

                    <div className="form__field">
                        <label htmlFor="dni" className="form__name">DNI</label>
                        <input type="number" className="form__input" name="dni" />
                    </div>

                    <div className="form__field">
                        <label htmlFor="contacto" className="form__name">Número de teléfono</label>
                        <input type="number" className="form__input" name="contacto" />
                    </div>

                    <div className="form__field">
                        <label htmlFor="direccion" className="form__name">Dirección</label>
                        <input type="text" className="form__input" name="direccion" />
                    </div>

                    <button type="submit" className="form__btn">Finalizar compra</button>

                </form>
            </div>
        </div>
    );
}
