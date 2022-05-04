import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryItems.css'

const InventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setInventoryItems(data));
    },[])

    return (
        <div id='inventories'>
            <h2 className='services-title mt-5'> Inventory Items: {inventoryItems.length}</h2>
            <div className='services-container'>
            {
                inventoryItems.slice(0, 6).map(inventoryItem => <InventoryItem
                
                key={inventoryItem._id}
                inventoryItem={inventoryItem}
                
                ></InventoryItem>)
            }

            </div>
        </div>
    );
};

export default InventoryItems;