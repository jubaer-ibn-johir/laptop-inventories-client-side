import React from 'react';
import InventoryItems from '../InventoryItems/InventoryItems';
import Laptops from '../Laptops/Laptops';

const Home = () => {
    return (
        <div>
            <InventoryItems></InventoryItems>
            <Laptops></Laptops>
        </div>
    );
};

export default Home;