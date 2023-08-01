import { selectAuth } from '@redux/features/auth';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function PublicRoute() {
  const auth = useSelector(selectAuth);  

  return !auth?.token ? <Outlet /> : <Navigate to="/dashboard/home" />;
}
