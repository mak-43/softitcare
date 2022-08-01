import React from 'react';
import Pic from '../Assets/404.webp'
const NotFound = () => {
    return (
        <div className='flex  py-8 '>
        <div className='basis-1/2 m-2  p-2'>
            <h1>ERROR 404</h1>
            <h1 className='font-bold text-2xl'>Oops! The page you're looking for isn't here.</h1>
            <p>You might have the wrong address, or the page may have removed</p>

        </div>
        <div className='m-2 basis-1/4'>
            <img className='rounded' src={Pic} alt="" />
        </div>
    </div>
    );
};

export default NotFound;