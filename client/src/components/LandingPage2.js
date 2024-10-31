import React from 'react';
import Terminus from '../images/terminus.png'; // Adjust the path as necessary
import LibertyFalls from '../images/liberty.png'; // Adjust the path as necessary


const images = [
  {
    src: Terminus,
    link: 'https://youtube.com', // Link for the image
  },
  {
    src: LibertyFalls,
    link: 'https://youtube.com', // Link for the image
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
        <div className="flex flex-wrap mt-5 justify-center"> {/* Added justify-center to center the images */}
          {images.map((image, index) => (
            <a
              key={index} // Use index as a key (or use a unique identifier if available)
              href={image.link}
              target="_blank" // Opens link in a new tab
              rel="noopener noreferrer" // Security measure
              className="w-full sm:w-1/2 lg:w-1/2 p-2" // Change lg:w-1/3 to lg:w-1/2 for two columns
            >
              <img
                src={image.src}
                alt={`Zombies ${index + 1}`}
                className="w-full h-auto lg:h-64 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage2;
