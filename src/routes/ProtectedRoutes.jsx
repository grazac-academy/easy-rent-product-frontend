import React from 'react';
import { useContextState } from 'context/context';
import { Navigate, Outlet } from 'react-router';

const useAuth = () => {
  const { user } = useContextState();
  if (user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
