import React, { useState } from 'react';
import AddTheme from '../Components/AddTheme';

const Admin = () => {
    const [add,setAdd]=useState(null)

    return (
        <div className='bg-info h-screen'>
               <div className=' flex justify-center items-center'>
               <label onClick={()=>setAdd(true)}  for="addtheme" class="btn my-5">Add theme</label>

              
               </div>
               {
                add && <AddTheme setAdd={setAdd}></AddTheme>
               }
        </div>
    );
};

export default Admin;