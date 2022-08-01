import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import AddModal from '../Components/AddModal';
import Loading from '../Components/Loading';

const AddProduct = () => {
    const [add,setAdd]=useState(null)
  
    
    const { isLoading, error, data, refetch } = useQuery(['products'], () => fetch('http://localhost:5000/products').then(res => res.json()))

    if(isLoading){
        return <Loading/>
    }

    return (
        <div className='h-screen'>
            <div className='flex justify-center items-center'>
                <label onClick={()=>setAdd(true)} for="addmodal" class="btn my-5">Add A Product</label>
               

            </div>
            {
                add && <AddModal setAdd={setAdd} refetch={refetch}></AddModal>
            }
        </div>
    );
};

export default AddProduct;