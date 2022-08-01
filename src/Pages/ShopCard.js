import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify'; 

const ShopCard = ({shop}) => {
    const { name, img, description, minimum, available, price,_id } = shop
    const navigate = useNavigate()
    const handleShop=()=>{
        toast.success('Order Placed')
    }
    return (
        <div>
            <div class="card md:w-96 sm:w-full bg-base-100 shadow-xl  mx-auto p-2">
                <figure><img className='rounded' src={img} style={{height:'300px',width:'100%'}} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p><span>Price: $</span>{price}</p>
                    <p><span>Stock: </span>{available}</p>

                    <button onClick={handleShop} className='btn btn-primary'>Buy now</button>


                </div>
            </div>
        </div>
    );
};

export default ShopCard;