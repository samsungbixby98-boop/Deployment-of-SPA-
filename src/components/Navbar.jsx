import { NavLink, useNavigate } from 'react-router-dom';
import { getAuthToken, logout } from '../utils/auth';

function Navbar() {
  const navigate = useNavigate();
  const loggedIn = Boolean(getAuthToken());

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className='site-header'>
      <div className='brand'>FormOps SPA</div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
        {loggedIn ? (
          <button className='ghost-btn' type='button' onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <NavLink to='/login'>Login</NavLink>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
