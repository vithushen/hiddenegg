import React from 'react';
import Terminus from '../images/terminus.png'; 
import LibertyFalls from '../images/liberty.png'; 

const images = [
  {
    src: Terminus,
    link: '/terminus',
  },
  {
    src: LibertyFalls,
    link: '/liberty-falls', 
  },
  // Add more images with links as needed
];

function LandingPage2() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start font-BlackOps"
      style={{
        background: 'linear-gradient(135deg, #000428, #2c5364, #541388, #2a2a72, #0f0c29)',
        backgroundSize: '400% 400%',
        animation: 'galaxyGradient 15s ease infinite',
      }}
    >
      <h1 className="text-white text-4xl sm:text-5xl mt-24 text-center">BO6 Zombies Easter Eggs</h1>

      <div className="flex flex-col mt-12 w-full max-w-4xl px-4">
        <label className="text-white text-3xl mb-2">Choose Map:</label>
        <div className="flex flex-wrap mt-5 justify-center"> 
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link}
              className="w-full sm:w-1/2 lg:w-1/2 p-2"
            >
              <img
                src={image.src}
                alt={`Zombies ${index + 1}`}
                className="w-full h-auto lg:h-64 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage2;
