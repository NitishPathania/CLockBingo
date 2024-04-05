// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'
// const RoutingSecurity = () => {
    
//         const auth = localStorage.getItem("token");
        
//         if (!auth) {
//           // If token is not present in local storage, navigate to the sign-in page
//           return <Navigate to="/login" />;
//         } else {
//           // If token is present, render nested routes
//           return <Outlet />;
//         }
      
      
   
      
// }

// export default RoutingSecurity

import React, { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const RoutingSecurity = (props) => {
    const navigate=useNavigate()
    const { Components}=props
useEffect(()=>{
    const auth = localStorage.getItem("token");
    if(!auth){
        navigate("/sign")

    }
})
    
   return(
    <>
    <Components/>

    </>
   )
};

export default RoutingSecurity;
