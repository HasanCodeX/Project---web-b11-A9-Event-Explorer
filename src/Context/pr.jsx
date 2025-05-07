// import React, { use } from 'react';
// import { AuthContext } from './AuthProvider';
// import { Navigate, useLocation } from 'react-router';
// // import Loading from '../Components/Loading';

// const PrivetRoute = ({ children }) => {
//     const { user } = use(AuthContext);
//         const location = useLocation();
//         console.log(location);
//     // if (loading) {
//     //     return <Loading></Loading>
//     // }
//     if (user&& user.email) {
        
//         return children;
//     }
//     return <Navigate state={location.pathname} to="/login"></Navigate>
// }

// export default PrivetRoute;

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <p>Loading...</p>;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
