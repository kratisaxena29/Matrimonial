import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ logedIn }) => {
  return !logedIn ? <Outlet /> : <Navigate to="/profiles" />;
};

export default PublicRoute;
