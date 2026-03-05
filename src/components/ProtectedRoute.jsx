import { Navigate, useLocation } from 'react-router-dom';
import { getAuthToken } from '../utils/auth';

function ProtectedRoute({ children }) {
  const location = useLocation();
  const isAuthenticated = Boolean(getAuthToken());

  if (!isAuthenticated) {
    return <Navigate to='/login' replace state={{ from: location.pathname }} />;
  }

  return children;
}

export default ProtectedRoute;
