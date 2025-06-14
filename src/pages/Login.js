import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../api/authService';
import { supabase } from '../utils/supabaseClient';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.includes('@')) {
      setError('Correo inválido.');
      return;
    }

    try {
      
      const { data } = await loginUser(email, password);
      const {session ,user} = data 
      localStorage.setItem('token', session.access_token);
      localStorage.setItem('user', JSON.stringify(user)); 
      navigate('/home');
    } catch (err){
           alert("error al iniciar sesion");
      console.log(err);
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    if (error) {
      console.error('Error con Google login:', error.message);
      setError('No se pudo iniciar sesión con Google.');
    }
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
      <div className="card bg-dark text-white shadow-lg rounded-4 p-4" style={{ width: '100%', maxWidth: '500px' }}>
        <h3 className="text-center mb-4">Iniciar sesión</h3>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className={`form-control ${error ? 'is-invalid' : ''}`}
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className={`form-control ${error ? 'is-invalid' : ''}`}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <div className="invalid-feedback">{error}</div>}
          </div>

          <button className="btn btn-primary w-100" type="submit">Entrar</button>
        </form>

        <button className="btn btn-outline-light w-100 mt-3" onClick={handleGoogleLogin}>
          Iniciar sesión con Google
        </button>

        <p className="text-center text-light mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
          ¿No tienes una cuenta? <Link to="/registro" className="text-decoration-none text-info">Regístrate</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
