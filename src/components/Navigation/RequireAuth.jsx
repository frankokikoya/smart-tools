import { useLocation, Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../hooks';

const RequireAuth = ({ allowedRoles = [] }) => {
  const { session } = useAuth();

  const location = useLocation();

  const getRole = session ? session?.user?.role?.id : null;

  const checkPass = allowedRoles.length > 0 ? allowedRoles.includes(getRole) : session?.user ? true : false;

  return checkPass ? (
    <Outlet />
  ) : session?.user ? (
    <Navigate to='/unauthorized' state={{ from: location }} replace />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
};

export default RequireAuth;
