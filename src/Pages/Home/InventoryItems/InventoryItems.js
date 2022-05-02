import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryItems.css'

const InventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect(() => {
        fetch('inventory.json')
        .then(res => res.json())
        .then(data => setInventoryItems(data));
    },[])

    return (
        <div>
            <h2 className='services-title'> Inventory Items: {inventoryItems.length}</h2>
            <div className='services-container'>
            {
                inventoryItems.map(inventoryItem => <InventoryItem
                
                key={inventoryItem.id}
                inventoryItem={inventoryItem}
                
                ></InventoryItem>)
            }

            </div>
        </div>
    );
};

export default InventoryItems;