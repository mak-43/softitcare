import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';
import ShopCard from './ShopCard';

const Home = () => {
    const navigate = useNavigate()
    const { isLoading, error, data, refetch } = useQuery(['products'], () => fetch('https://guarded-bayou-85671.herokuapp.com/updatetools').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    console.log(data?.lenght)
    return (
        <div className='py-10 bg-info'>
            <h1 className='text-4xl font-semibold text-center py-5 '>Our Latest Tools</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 '>
                {
                    data?.map(t => <ShopCard
                        key={t._id}
                        shop={t}

                    ></ShopCard>)
                }

            </div>
            <button className='flex justify-center items-center mt-10  btn mx-auto'>  <p onClick={() => navigate('/shop')} >SEE MORE ...</p></button>
        </div>
    );
};

export default Home;