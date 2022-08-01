import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductModal = ({ id, refetch, setId }) => {

    const handleproduct = id => {
        fetch(`https://guarded-bayou-85671.herokuapp.com/product/${id}`, {
            method: 'Delete',
        }).then(res => res.json())
            .then(data => {

                toast.success('Product Deleted')

                setId(null)
                refetch()

            })
    }
    return (
        <div>
            <input type="checkbox" id="product-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">

                    <h3 class="font-bold text-lg">Do you want to Delete This Product?</h3>

                    <div class="modal-action">
                        <label onClick={() => handleproduct(id)} for="product-modal" class="btn">Yes</label>
                        <label for="product-modal" class="btn ">No</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductModal;