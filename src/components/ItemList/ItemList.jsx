import React from 'react';
import './ItemList.css'
import { Item } from '../Item/Item';
import { ItemCart } from '../ItemCart/ItemCart';
export const ItemList = ({ productos, preset }) => {

    return (
        <>  
            {
                preset === "Item" ?
                    productos.map(producto => <Item key={producto.id} item={producto} />)
                :
                    productos.map(producto => <ItemCart key={producto.id} item={producto} />)

            }
        </>
    );
}
