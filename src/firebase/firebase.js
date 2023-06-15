// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, addDoc, getDoc, getDocs, updateDoc, deleteDoc, collection, doc} from 'firebase/firestore'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKlxuAjOeSGZ4hesGzEOJM35q-26lf3lY",
  authDomain: "saywhisky-88741.firebaseapp.com",
  projectId: "saywhisky-88741",
  storageBucket: "saywhisky-88741.appspot.com",
  messagingSenderId: "725231880099",
  appId: "1:725231880099:web:1442f01657bc77ba0a3c16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Consultar DB

const db = getFirestore()

/*
Create -> POST
Read -> GET
Update -> PUT
Delette -> DELETE
*/

export const createProd = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async (p) => {
        await addDoc(collection(db, "productos"), {//Si existe la coleccion te agrega los producots, y si no, lo crea y agrega
            idCategoria : p.idCategoria,
            nombre : p.nombre,
            marca : p.marca,
            precio : p.precio,
            stock : p.stock,
            img : p.img 
        }) 
    })
}

export const getProds = async () => {
    const prods = await getDocs(collection(db, "productos"))
    const items = prods.docs.map( p => {
        return {...p.data(), id: p.id}
    })
    return items
}

export const getProd = async (id) => {
    const prod = await getDoc(doc(db, "productos", id))
    const item = { ...prod.data(), id: prod.id }
    return item
    
}

export const updateProd = async (id, info) => {
    await updateDoc(doc(db, "productos", id), info)
    // Busco el producto del ID en la coleccion productos en la base de datos db, y manda "info" a actualizar
}

export const deleteProd = async(id) => {
    await deleteDoc(doc("db", "productos", id))
}


// Create y Read OrdenCompra

export const createOrdenCompra = async(cliente, precioTotal, cart, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        cliente: cliente,
        items:cart,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    //                        getDoc pq es un solo elemento, donde envío doc q es un solo elemento, mi base de datos, la coleccion y el id que es lo que va a buscar de la coleccion de la base de datos 
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}