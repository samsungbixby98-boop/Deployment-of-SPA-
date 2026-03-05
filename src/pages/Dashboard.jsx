import { env } from '../config/env';

function Dashboard() {
  return (
    <section className='card'>
      <h1>Protected Dashboard</h1>
      <p>You can see this page because the route guard validated your auth token.</p>
      <ul className='metrics'>
        <li>
          <strong>App:</strong> {env.appName}
        </li>
        <li>
          <strong>Mode:</strong> {env.mode}
        </li>
        <li>
          <strong>API Base URL:</strong> {env.apiBaseUrl}
        </li>
      </ul>
    </section>
  );
}

export default Dashboard;
