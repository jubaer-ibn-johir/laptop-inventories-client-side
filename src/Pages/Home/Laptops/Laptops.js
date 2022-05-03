import React from 'react';
import './Laptops.css'

import laptop1 from '../../../images/laptops/laptop-1.jpg';
import laptop2 from '../../../images/laptops/laptop-2.webp';
import laptop3 from '../../../images/laptops/laptop-3.webp';
import laptop4 from '../../../images/laptops/laptop-4.jpg';
import laptop5 from '../../../images/laptops/laptop-5.webp';
import laptop6 from '../../../images/laptops/laptop-6.jpg';
import Laptop from '../Laptop/Laptop';

const laptops = [
    {id:1 , name: 'Amazing Laptop 1', img: laptop1},
    {id:2 , name: 'Amazing Laptop 2', img: laptop2},
    {id:3 , name: 'Amazing Laptop 3', img: laptop3},
    {id:4 , name: 'Amazing Laptop 4', img: laptop4},
    {id:5 , name: 'Amazing Laptop 5', img: laptop5},
    {id:6 , name: 'Amazing Laptop 6', img: laptop6}
]
const Laptops = () => {
    return (
        <div id='explore' className='container'>
            <h2 className='text-dark text-center mt-5'>Explore More</h2>
            <div className='row laptops-style w-100 '>
                {
                    laptops.map(laptop => <Laptop
                    key={laptop.id}
                    laptop={laptop}
                    
                    ></Laptop>)
                }

            </div>
        </div>
    );
};

export default Laptops;