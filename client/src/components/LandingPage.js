import React from 'react';
import zombiesImage from '../images/zombies1.png'; 

function LandingPage() {
  return (
    <div
      className="hero min-h-screen font-BlackOps"
      style={{
        background: 'linear-gradient(135deg, #000428, #2c5364, #541388, #2a2a72, #0f0c29)',
        backgroundSize: '400% 400%',
        animation: 'galaxyGradient 15s ease infinite',
      }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={zombiesImage}
          alt="Zombies Easter Eggs"
          className="max-w-full h-64 lg:h-96 rounded-lg lg:max-w-md mb-6 lg:mb-0 lg:mr-6"
          style={{
            filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))', // Reduced shadow effect
          }}
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Black Ops 6: Zombies Easter Eggs</h1>
          <p className="py-6 text-white text-base lg:text-lg">
            Stay updated on the latest Zombies Easter Egg discoveries, tips, and exclusive content!
            Follow us on social media and support the website to ensure you never miss an update.
            Your support helps us keep the community informed and brings you the best Black Ops 6 Zombies content.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>

          {/* Updated Button Style */}
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white w-full lg:w-44 py-2 px-4 text-sm lg:text-base rounded-md shadow-lg hover:from-purple-600 hover:to-blue-600 transition duration-300">
            View Easter Egg
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
