
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';


import { signOut } from 'firebase/auth';
import auth from '../firebase.init';

import Loading from './Loading';
import useVendor from '../Hooks/useVendor';

const RequireVendor = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [vendor, vendorLoading] = useVendor(user);
    const location = useLocation();

    if(loading || vendorLoading){
        return <Loading></Loading>
    }

    if(!user || !vendor){
        signOut(auth);
        return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireVendor;