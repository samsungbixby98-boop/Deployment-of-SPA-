import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className='card'>
      <h1>404</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className='btn' to='/'>
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
