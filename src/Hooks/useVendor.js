import React, { useEffect, useState } from 'react';

const useVendor = (user) => {
    const [vendor, setVendor] = useState(false);
    const [vendorLoading, setVendorLoading] = useState(true);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`http://localhost:5000/vendor/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                setVendor(data.vendor);
                setVendorLoading(false);
            })
        }
    }, [user])

    return [vendor, vendorLoading]
}

export default useVendor;