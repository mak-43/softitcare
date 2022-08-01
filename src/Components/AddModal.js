import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddModal = ({ setAdd, refetch }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        const image = data?.img[0]
        const formData = new FormData()
        formData.append('image', image)
        const imgStorageKey = '6d58d8deea3773d04ec3b9955d466d7f'
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const product = {
                        name: data.name,
                        img: img,
                        description: data.description,
                        minimum: data.minimum,
                        available: data.available,
                        price: data.price,

                    }
                    fetch(`https://guarded-bayou-85671.herokuapp.com/addproduct`, {
                        method: 'post',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('success', data)
                            toast('Product Added')

                        })

                    setAdd(null)
                    refetch()
                }
            })


    };
    return (
        <div>




            <input type="checkbox" id="addmodal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Add A Product</h3>
                    <form action="" onSubmit={handleSubmit(onSubmit)} >
                        <label class="label">
                            <span class="label-text">Upload an Image</span>
                        </label>
                        <input type="file" class="input mb-2 input-bordered input-info w-full max-w-xs" required {...register('img')} />


                        <input type="text" placeholder="Product Name" class="input my-2 input-bordered input-info w-full max-w-xs" required {...register('name')} />

                        <input type="text" placeholder="Product Description" class="input my-2 input-bordered input-info w-full max-w-xs" required {...register('description')} />

                        <input type="number" placeholder="Minimum Order" class="input my-2 input-bordered input-info w-full max-w-xs" required {...register('minimum')} />

                        <input type="number" placeholder="Available Quantity" class="input my-2 input-bordered input-info w-full max-w-xs" required {...register('available')} />

                        <input type="number" placeholder="Unit Price" name='price' class="input my-2 input-bordered input-info w-full max-w-xs" required {...register('price')} />

                        <div class="modal-action">

                            <input for="addmodal" type="submit" className='btn hover:bg-green-400' value='Upload' />
                            <label for="addmodal" class="btn hover:bg-red-400">Cancel</label>

                        </div>
                    </form>

                </div>
            </div>
        </div >
    );
};

export default AddModal;