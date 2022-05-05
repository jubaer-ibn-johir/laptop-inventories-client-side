import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageItems = () => {
    const navigate = useNavigate();

    const manageIinventories = event => {
        navigate('/checkout')
    }
    return (
        <div className='text-center mt-5'>
           <h2>To Manage Items Click to  "Manage Inventories"</h2> 
           <button className='btn btn-dark' onClick={manageIinventories}>Manage Inventories</button>
        </div>
    );
};

export default ManageItems;