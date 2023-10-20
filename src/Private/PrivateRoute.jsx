import React, { useContext } from 'react';
import { ContextAuth } from '../Context/Context';
import Loading from '../Shared/Loading'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, shortLoading } = useContext(ContextAuth)
    if(shortLoading){
        return (
            <div>
                <Loading></Loading>
            </div>
        )
    }
    if(user){
        return children
    }
    else{
       return <Navigate to='/signin'></Navigate>
    }
};

export default PrivateRoute;