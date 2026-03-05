import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className='card'>
      <h1>Packaging and Deployment Lab</h1>
      <p>
        This SPA is production-ready with routing, guarded pages, env-based configuration,
        linting, formatting, and deployment setup for Netlify/Vercel.
      </p>
      <div className='row'>
        <Link className='btn' to='/login'>
          Open Login Form
        </Link>
        <Link className='btn btn-outline' to='/dashboard'>
          Go to Protected Dashboard
        </Link>
      </div>
    </section>
  );
}

export default Home;
