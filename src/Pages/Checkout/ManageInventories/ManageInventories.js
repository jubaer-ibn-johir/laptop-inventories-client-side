import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import ManageInventory from '../ManageInventory/ManageInventory'
import './ManageInventories.css'

const ManageInventories = () => {
    const [manageItems, setManageItems] = useState([]);
    // const [inventoryItems] = useInventories();
    const navigate = useNavigate();

    const AddNewItem = (event) => {
        navigate("/addnew");
      };

    useEffect(() => {
        fetch('https://mighty-sea-35286.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setManageItems(data));
    },[])
    return (
        <div>
            <h1 className='services-title'>Manage Inventories</h1>
            <button className='btn btn-dark' onClick={AddNewItem}>Add New Items</button>
            <div className='services-container'>
            {
                manageItems.map(manageInventory => <ManageInventory
                key={manageInventory._id}
                manageInventory={manageInventory}
                
                
                >
                    
                </ManageInventory> )
            }
            </div>
        </div>
    );
};

export default ManageInventories;