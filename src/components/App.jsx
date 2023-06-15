import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Tostify
import { ToastContainer } from 'react-toastify';

import { NavBar } from './NavBar/NavBar';
import { Footer } from './Footer/Footer';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';
import { createProd, getProd } from '../firebase/firebase';

export const App = () => {
    // createProd()
    // getProd()
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <ToastContainer />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:category' element={<ItemListContainer />} />
                    <Route path='/product/:id' element={<ItemDetailContainer />} />
                    <Route path='/checkout' element={<Checkout />}></Route>
                    <Route path='/cart' element={<Cart/> } />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

