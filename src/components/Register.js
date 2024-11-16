import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css'; 
import mapleLeafImage from './logoweb.png';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Регистрация:', { username, password });

    navigate('/login');
  };

  return (
    <div className="register-container">
         <img
      className="maple-leaf"
      src={mapleLeafImage}
      alt="Клиновый лист со снегом"
      style={{ width: '250px', height: 'auto', marginBottom: '20px' }}
      />
      <p class="cursor typewriter-animation">*Hello New User!* </p>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          placeholder="login"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="register-input"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="register-input"
        />
        <button type="submit" className="register-button">Sign up</button>
      </form>
    </div>
  );
};

export default Register;
