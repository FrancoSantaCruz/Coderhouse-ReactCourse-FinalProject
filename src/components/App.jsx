import './App.css';
import { ItemCount } from './ItemCount/ItemCount';
import React from 'react';
import { NavBar } from './NavBar/NavBar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer'
export const App = () => {
  return (
    <div>
      <NavBar />


      <ItemCount />
      <ItemListContainer greeting={"PRODUCTOS"}/>
    </div>
  );
}

/*
<Saludo mensaje={"Hola, Buenos días!"} traduccion={"Hi, good morning!"}/> 


HTML                JSX
class               className
<input>             <input />
`${variable}`       {variable}

*/
