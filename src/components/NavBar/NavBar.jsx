import React from 'react';
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <div>
            <nav className="nav-bar">

                <div className="nav-col izq">
                    <a href="#" className="indice">Home</a>
                    <a href="#" className="indice">Products</a>
                    <a href="#" className="indice">Recipes</a>
                </div>
                <figure className="nav-col logo">
                    <img src="./LogoSVG2.svg" alt='Logo' />
                </figure>
                <div className="nav-col der">

                    <div className="search-container">
                        <input className="searchbox" type="text" />
                        <a href="#" className="search-btn"><i className="fas fa-search" style={{"color": "#ebc400"}} /></a>
                    </div>

                    <div className="options">
                        <div className="__register">
                            <a href='#'><i className="fa-solid fa-right-to-bracket" style={{"color": "#ebc400"}}/></a>
                        </div>
                        <div className="__login">
                            <a href='#'><i className="fa-solid fa-user" style={{"color": "#ebc400"}}/></a>
                        </div>
                        <CartWidget cantidadCarrito={1}/>
                    </div>
                </div>

            </nav>
        </div>
    );
}


/*


            
                
                
            
            


*/