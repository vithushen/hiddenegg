import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bloodBackground from '../images/blood-background.mp4';
import zombieNoise from '../images/zombie-noise.mp3'; // Import the audio file

function ErrorPage() {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [audio] = useState(new Audio(zombieNoise)); // Initialize audio
    const [hasPlayedSound, setHasPlayedSound] = useState(false); // Track if sound has played

    const handleSoundPlay = () => {
        if (!hasPlayedSound) { // Check if sound has not been played yet
            audio.play(); // Play the sound
            setHasPlayedSound(true); // Update state to indicate sound has played
        }
    };

    const handleGoHome = () => {
        navigate('/home');
    };

    useEffect(() => {
        // Set the video playback rate
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75;
        }

        // Clean up the audio on component unmount
        return () => {
            audio.pause();
            audio.currentTime = 0; // Reset audio to the beginning
        };
    }, [audio]);

    return (
        <div
            className="relative flex items-center justify-center min-h-screen bg-black text-white font-Creepster text-7xl"
            onClick={handleSoundPlay} // Play sound on any click
        >
            {/* Video Background */}
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={bloodBackground}
                autoPlay
                loop
                muted
            />

            <div className="relative z-10 text-center">
                <h1 className="text-6xl font-bold mb-4 text-red-600 tracking-widest">Error 404</h1>
                <h2 className="text-4xl font-bold mb-4 text-red-600 tracking-widest">Zombies Have Taken Over!</h2>
                <button
                    onClick={handleGoHome}
                    className="mt-6 px-6 py-3 bg-white text-black font-bold rounded hover:bg-red-600 hover:text-white transition duration-300 tracking-wide text-4xl md:px-8 md:py-4 md:text-7xl"
                >
                    Back to Home Page
                </button>

            </div>
        </div>
    );
}

export default ErrorPage;
