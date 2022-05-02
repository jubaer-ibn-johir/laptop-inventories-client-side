import React from 'react';
import './InventoryItem.css'


const InventoryItem = ({inventoryItem}) => {
    const {name, img, description, price, quantity, supplier} = inventoryItem;
    return (
        <div className='inventory'>
            <img src={img} />
            <h4>{name}</h4>
            <p> price={price}</p>
            <p><small>Description: {description}</small> </p>
            <p>Quantity: {quantity} </p>
            <p>Supplier: {supplier}</p>
        </div>
    );
};

export default InventoryItem;