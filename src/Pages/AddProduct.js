import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import AddModal from '../Components/AddModal';
import Loading from '../Components/Loading';
import ProductModal from '../Components/ProductModal';

const AddProduct = () => {
    const [add,setAdd]=useState(null)
    const [id, setId] = useState(null)
    
    const { isLoading, error, data:products, refetch } = useQuery(['products'], () => fetch('http://localhost:5000/products').then(res => res.json()))

    if(isLoading){
        return <Loading/>
    }

    return (
        <div className='h-screen'>
            <div className='flex flex-col justify-center items-center'>
                <label onClick={()=>setAdd(true)} for="addmodal" class="btn my-5">Add A Product</label>
                <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Minimum Quantity</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            products?.map((o, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td><div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={o?.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div></td>
                                    <td>{o?.name}</td>
                                    <td>{o?.description}</td>
                                    <td>{o?.minimum}</td>
                                    <td>{o?.available}</td>
                                    <td>$ {o?.price}</td>


                                    <label onClick={() => setId(`${o?._id}`)} for="product-modal" class=" cursor-pointer text-red-500 text-xl"><i class="fa-solid fa-delete-left mt-6 ml-5"></i></label>


                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

            </div>
            {
                 id && <ProductModal id={id} setId={setId} refetch={refetch} ></ProductModal>
            }
            {
                add && <AddModal setAdd={setAdd} refetch={refetch}></AddModal>
            }
        </div>
    );
};

export default AddProduct;