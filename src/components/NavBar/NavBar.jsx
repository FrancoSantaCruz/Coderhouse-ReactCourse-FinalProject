import React from 'react';
import './NavBar.css'
import logo from '../../assets/LogoSVG2.svg'
import { CartWidget } from '../CartWidget/CartWidget';
import { Categorias } from './Categorias/Categorias.jsx';

export const NavBar = () => {
    return (
        <div>
            <nav className="nav-bar">
                <Categorias />

                <figure className="nav-col__logo">
                    <img src={logo} alt='Logo' className='logo' />
                </figure>
                <div className="nav-col der">

                    <div className="search-container">
                        <input className="searchbox" type="text" />
                        <a href="/" className="search-btn"><i className="fas fa-search" style={{ "color": "#ebc400" }} /></a>
                    </div>

                    <div className="options">
                        <div className="__register">
                            <a href='/'><i className="fa-solid fa-right-to-bracket" style={{ "color": "#ebc400" }} /></a>
                        </div>
                        <div className="__login">
                            <a href='/'><i className="fa-solid fa-user" style={{ "color": "#ebc400" }} /></a>
                        </div>
                        <CartWidget cantidadCarrito={1} />
                    </div>
                </div>

            </nav>
        </div>
    );
}


/*


            
                
                
            
            


*/