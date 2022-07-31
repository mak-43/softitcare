import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import{Navigate,useLocation,Outlet} from 'react-router-dom'
import Loading from '../Components/Loading';
import auth from '../firebase.init';

const PrivateRoute = ({children}) => {
    const [user,loading,error]=useAuthState(auth)

    const location=useLocation()
    
    if(loading){
        return <Loading/>
    }
    if(!user){
        return <Navigate to='/signin' state={{from:location}} replace />
    }
    
    return <Outlet/>
};

export default PrivateRoute;