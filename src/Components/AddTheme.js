import React from 'react';
import { useForm } from "react-hook-form"; 
import { toast } from 'react-toastify';
const AddTheme = ({setAdd}) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data) 
    
        toast('Theme uploaded successfully')
        setAdd(null)
    };
    return (
        <div>

         


            <input type="checkbox" id="addtheme" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Upload a theme </h3>
                    <form onSubmit={handleSubmit(onSubmit)}>


                    <div class="modal-action">
                        <input className='btn' type="submit" value='yes' />
                        <label for="addtheme" class="btn">no</label>
                    </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default AddTheme;