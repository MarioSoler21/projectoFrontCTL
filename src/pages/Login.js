import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../api/authService';
import { supabase } from '../utils/supabaseClient';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      setInputError('Correo inválido.');
      return;
    }

    try {
      const { session, user } = await loginUser(email, password);
      localStorage.setItem('token', session.access_token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home');
    } catch (err) {
      console.error(err);
      setInputError('Correo o contraseña incorrectos.');
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    if (error) console.error('Error con Google login:', error);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        height: '100vh',
        backgroundImage: `url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1950&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="card bg-secondary text-white shadow-lg rounded-4 p-4" style={{ width: '100%', maxWidth: '800px' }}>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Correo electrónico</label>
            <input
              type="email"
              id="emailInput"
              className={`form-control ${inputError ? 'is-invalid' : ''}`}
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Contraseña</label>
            <input
              type="password"
              id="passwordInput"
              className={`form-control ${inputError ? 'is-invalid' : ''}`}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {inputError && <div className="invalid-feedback">{inputError}</div>}
          </div>

          <button className="btn btn-primary w-100 py-2 fw-semibold" type="submit">
            Ingresar
          </button>
        </form>

        <button className="btn btn-outline-light w-100 mt-2" onClick={handleGoogleLogin}>
          Iniciar sesión con Google
        </button>

        <p className="text-center text-muted mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
          ¿No tienes una cuenta? <a href="/register" className="text-decoration-none">Regístrate</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
