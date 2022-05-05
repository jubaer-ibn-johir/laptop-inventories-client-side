import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import './ManageInventory.css'

const ManageInventory = ({manageInventory}) => {
    const [inventoryItems, setInventoryItems] = useInventories();
    const { _id, name, img, description, price, quantity, supplier} = manageInventory;
        
        const handleDelete = id => {
            const proceed = window.confirm('Are you sure?');
            if(proceed){
                const url = `http://localhost:5000/inventory/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventoryItems.filter( manageInventory._id !== id );
                    setInventoryItems(remaining);
                })
            }
            
        }
    return (
        <div className='inventory'>
            <img src={img} />
            <h4>{name}</h4>
            <p> price={price}</p>
            <p><small>Description: {description}</small> </p>
            <p>Quantity: {quantity} </p>
            <p>Supplier: {supplier}</p>
            <button onClick={() => handleDelete(_id)} className='btn btn-dark'>Delete</button>
        </div>
    );
};

export default ManageInventory;