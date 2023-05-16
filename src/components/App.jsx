import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { NavBar } from './NavBar/NavBar';
import { Footer } from './Footer/Footer';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:category' element={<ItemListContainer />} />
                    <Route path='/product/:id' element={<ItemDetailContainer />} />
                    <Route path='/checkout' element={<Checkout />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

