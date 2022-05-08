import React from 'react';
import Speciality from '../../Speciaity/Speciality';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import Laptops from '../Laptops/Laptops';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Laptops></Laptops>
            <Speciality></Speciality>
        </div>
    );
};

export default Home;