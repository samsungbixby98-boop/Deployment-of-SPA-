import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';
import { logClientError } from '../services/errorLogger';

function validate(values) {
  const errors = {};

  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!values.password.trim()) {
    errors.password = 'Password is required.';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters.';
  }

  return errors;
}

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || '/dashboard';

  const [values, setValues] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitError, setSubmitError] = useState('');

  const errors = useMemo(() => validate(values), [values]);
  const hasErrors = Object.keys(errors).length > 0;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTouched({ email: true, password: true });
    setSubmitError('');

    if (hasErrors) {
      return;
    }

    try {
      // Simulated auth call for lab usage.
      login(`token-${Date.now()}`);
      navigate(redirectPath, { replace: true });
    } catch (error) {
      setSubmitError('Login failed. Please try again.');
      logClientError(error, { feature: 'login-form' });
    }
  };

  return (
    <section className='card form-card'>
      <h1>Login</h1>
      <p>Use any valid email and a password with at least 6 characters.</p>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='student@example.com'
          autoComplete='email'
        />
        {touched.email && errors.email ? <p className='field-error'>{errors.email}</p> : null}

        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Enter password'
          autoComplete='current-password'
        />
        {touched.password && errors.password ? (
          <p className='field-error'>{errors.password}</p>
        ) : null}

        {submitError ? <p className='field-error'>{submitError}</p> : null}

        <button className='btn' type='submit' disabled={hasErrors && touched.email && touched.password}>
          Sign In
        </button>
      </form>
    </section>
  );
}

export default Login;
