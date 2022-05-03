import React from 'react';
import notFound from '../../../images/notFound/404.jpg'
const NotFound = () => {
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Not Found</h2>
            <img className='container ml-5' src={notFound}></img>
        </div>
    );
};

export default NotFound;