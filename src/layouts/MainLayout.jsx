import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MainLayout() {
  return (
    <div className='app-shell'>
      <Navbar />
      <main className='content'>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
