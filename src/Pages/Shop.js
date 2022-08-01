import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useNavigationType } from 'react-router-dom';
import ShopCard from './ShopCard';
import Loading from '../Components/Loading';

const Shop = () => {

    const { isLoading, error, data, refetch } = useQuery(['products'], () => fetch('https://guarded-bayou-85671.herokuapp.com/products').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    /// https://guarded-bayou-85671.herokuapp.com/
    return (
        <div className='bg-info'>
            <h1 className='text-2xl justify-center flex my-5 font-bold'>All Products</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-3'>
                {
                    data?.map(d => <ShopCard
                        key={d._id}
                        shop={d}
                    ></ShopCard>)
                }
            </div>
        </div>
    );
};

export default Shop;