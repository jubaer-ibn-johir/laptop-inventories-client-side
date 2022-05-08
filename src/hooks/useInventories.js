import React, { useEffect, useState } from 'react';

const useInventories = () => {
    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect(() => {
        fetch('https://mighty-sea-35286.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setInventoryItems(data));
    },[])
    return [inventoryItems, setInventoryItems]
};

export default useInventories;