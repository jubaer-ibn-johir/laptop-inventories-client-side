import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageInventory.css'

const ManageInventory = ({manageInventory}) => {

    
        const { _id, name, img, description, price, quantity, supplier} = manageInventory;
        const navigate = useNavigate();
        const navigateInventoryDetail = id => {
            // navigate(`/inventory/${id}`);
        }
    return (
        <div className='inventory'>
            <img src={img} />
            <h4>{name}</h4>
            <p> price={price}</p>
            <p><small>Description: {description}</small> </p>
            <p>Quantity: {quantity} </p>
            <p>Supplier: {supplier}</p>
            <button onClick={() => navigateInventoryDetail(_id)} className='btn btn-dark'>Delete</button>
        </div>
    );
};

export default ManageInventory;