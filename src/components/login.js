import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import './login.css';
import mapleLeafImage from './logoweb.png';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Состояние для хранения ошибок
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Проверка на наличие символа '@' в логине
        if (!username.includes('@')) {
            setError('Login must contain the symbol "@"');
            return; // Прекращаем выполнение, если логин некорректен
        }

        setError(''); // Сбрасываем ошибку, если логин корректен
        login(username, password);
        navigate('/'); 
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div className="login-container">
            <img
                className="maple-leaf"
                src={mapleLeafImage}
                alt="Клиновый лист со снегом"
                style={{ width: '250px', height: 'auto', marginTop: '100px' }}
            />
            <p className="cursor typewriter-animation">Welcome to *Canada CarShop Paradise*! </p>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="login-input"
                />
                {error && <p className="error-message">{error}</p>} {/* Отображение сообщения об ошибке */}
                <button type="submit" className="login-button">Sign in</button>
            </form>
            <br />
            <button onClick={handleRegister} className="register-button">
                if you don't have account
            </button>
        </div>
    );
};

export default Login;
