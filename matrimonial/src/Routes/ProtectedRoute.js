import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ logedIn }) => {
  return logedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
