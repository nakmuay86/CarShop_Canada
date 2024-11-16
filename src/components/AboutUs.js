import React from 'react';
import './about.css';
import mapleLeafImage from './logoweb.png';

const AboutUs = () => {
  return (
    <div className="about-us">
      <img className="maple-leaf" src={mapleLeafImage} alt="Maple Leaf" style={{ width: '200px', height: 'auto', marginTop: '30px' }}  />
      <h2>About Us</h2>
      <p>
    Welcome to <a href="/" target="_blank" rel="noopener noreferrer">CarShop Ontario</a>, your premier destination for quality vehicles in Canada. 
    We are dedicated to providing our customers with an exceptional car buying experience. 
    Our team of automotive experts is here to assist you in finding the perfect vehicle that fits your needs and budget.
</p>
<p>
    At <a href="/" target="_blank" rel="noopener noreferrer">CarShop Ontario</a>, we believe in transparency and integrity. 
    Our extensive inventory includes a wide range of makes and models, all thoroughly inspected to ensure quality and reliability. 
    Whether you are looking for a compact car, a family SUV, or a rugged truck, we have something for everyone.
</p>
<p>
    Our commitment to customer satisfaction doesn't end with the sale. 
    We offer comprehensive after-sales support, including financing options, maintenance services, and a dedicated customer service team ready to assist you.
</p>
<p>
    Thank you for choosing <a href="/" target="_blank" rel="noopener noreferrer">CarShop Ontario</a>. We look forward to helping you find your next vehicle!
</p>

    <br />
    <footer>
    <h3>Contact Us</h3>
<p>
Email: <a href="mailto:support@mooseontario.ca">support@mooseontario.ca</a>
</p>
<p>
Phone: 1-250-360-0311
</p>
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
        <br />
        <div style={{ marginTop: '40px', marginBottom: '30px' }}>
          <h3>Our Location</h3>
          <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.7549117369144!2d-81.21432702319976!3d43.0044950711405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882eed9c42b9d101%3A0xc5edbbcf46d06ef0!2zNTgzIE1vcm5pbmd0b24gQXZlLCBMb25kb24sIE9OLCDQmtCw0L3QsNC00LA!5e0!3m2!1sru!2sse!4v1731171868012!5m2!1sru!2sse%22">
          allowFullScreen=""
          loading="lazy"
          </iframe>
        </div>
      </footer>
    </div>
    
    
  );
};

export default AboutUs;
