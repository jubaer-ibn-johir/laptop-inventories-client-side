import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {

    const navigate = useNavigate();
    const addNewItems = event => {
        navigate('/addnew')
    }
    return (
        <div className='text-center mt-5'>
            <h2>To Add items Click to "Add New Items"</h2>
            <button className='btn btn-dark' onClick={addNewItems}>Add New Items</button>
        </div>
    );
};

export default AddItem;