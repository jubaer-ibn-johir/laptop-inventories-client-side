import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {inventoryId} = useParams();
    return (
        <div>
            <h2>Manage Inventories: {inventoryId}</h2>
            <div className='text-center'>
            <Link to='/checkout'>
                <button className='btn btn-dark'> proceed checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default InventoryDetail;