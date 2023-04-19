import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoute = ({ children }) => {

  const { token } = useSelector((state) => state.customer);

  const { pathname } = useLocation();

  return token ? children : <Navigate to={`/login?redirect=${pathname.split('/').filter(Boolean)[0]}`} replace />;
};

export default ProtectedRoute;
