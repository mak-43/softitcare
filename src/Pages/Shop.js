import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useNavigationType } from 'react-router-dom';
import ShopCard from './ShopCard';
import Loading from '../Components/Loading';

const Shop = () => {

    const { isLoading, error, data, refetch } = useQuery(['products'], () => fetch('http://localhost:5000/products').then(res => res.json()))

    if(isLoading){
        return <Loading/>
    }

    return (
        <div>
        
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                {
                    data?.map(d =><ShopCard
                    key={d._id}
                    shop={d}
                    ></ShopCard> )
                }
            </div>
        </div>
    );
};

export default Shop;