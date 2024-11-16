import React, { useContext } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Navigate, Link  } from 'react-router-dom';
import { AuthProvider, AuthContext } from './AuthContext'; 
import CarList from './components/CarList';
import Login from './components/login'; 
import Snowfall from 'react-snowfall';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mapleLeafImage from './components/logoweb.png';
import marquee from './components/logoweb1.png';
import Register from './components/Register';
import useravatarUrl from './components/Avatar.jfif'
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import video from './components/moosecar.mp4'


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App" style={{ position: 'relative', overflow: 'hidden' }}>
          <Snowfall 
          />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

const Main = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <>
      <img className="maple-leaf" src={mapleLeafImage} alt="Maple Leaf" style={{ width: '350px', height: 'auto', marginTop: '30px'}} />
      <div className="header">
        <div className="about-us-button">
          <Link to="/about">
            <button className="about-us-btn">About Us</button>
          </Link>
        </div>
        <div className="user-info">
          <div className="user-details">
            <img className="avatar" src={useravatarUrl} alt="Avatar" />
            <span className="username">{user.username}</span>
            <button onClick={logout} className="exit-button">exit</button>
          </div>
        </div>
      </div>
      <div className="marquee">
        <span><img src={marquee} height="35px"/> Welcome to Canadian Carshop <img src={marquee} height="35px"/> </span>
      </div>
      <CarList />

     <div>
      <div className="adsection"></div>
      <h2  className="ads" style={{marginTop: '100px'}}>Ads: </h2>
      <video controls autoplay muted loop poster="https://i.vimeocdn.com/video/1874170129-0eb9083e6947219cfd026ec3bde2d5d7e18dfbe0736d311e7f7b7979fb45200b-d?mw=1800&mh=1013">
        <source src={video} type='video/mp4'/>
      </video>
      
      <a href="https://ericobraga.com/back-to-the-future" target='_blank'>
      <h5>Mitsubishi Lancer X advertising - Back to the Future</h5>
      </a>
      </div>

      <Reviews />
      <footer>
    <h3>Contact Us</h3>
    <p>
      Email: <a href="mailto:support@mooseontario.ca">support@mooseontario.ca</a></p>
    <p>Phone: 1-250-360-0311</p>
    <div>
        <h3>Follow Us</h3>
        <a href="https://worldradiomap.com/ca/play/beat915" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-volume-up"></i>
        </a> 
        <a href="https://x.com/indeadmau5" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i>
        </a> 
        <a href="https://www.youtube.com/watch?v=EFKggPGqBSI&list=LL&index=4" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-youtube"></i>
        </a>
    </div>
        <div style={{ marginTop: '70px', marginBottom: '30px' }}>
          <h1>Our Location</h1>
          <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.7549117369144!2d-81.21432702319976!3d43.0044950711405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882eed9c42b9d101%3A0xc5edbbcf46d06ef0!2zNTgzIE1vcm5pbmd0b24gQXZlLCBMb25kb24sIE9OLCDQmtCw0L3QsNC00LA!5e0!3m2!1sru!2sse!4v1731171868012!5m2!1sru!2sse%22">
          allowFullScreen=""
          loading="lazy"
          </iframe>
        </div>
      </footer>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
