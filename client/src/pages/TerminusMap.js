import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import terminusImage from '../images/terminus.png';
import MainEasterEggSteps from '../data/TerminusMainEE';

function TerminusMap() {
    const [showMainEasterEgg, setShowMainEasterEgg] = useState(false);
    const [showSideEasterEgg, setShowSideEasterEgg] = useState(false);
    const [showSubStepOne, setShowSubStepOne] = useState(false);
    const [showSubStepTwo, setShowSubStepTwo] = useState(false);
    const [activeSteps, setActiveSteps] = useState([]);

    // Toggle active state of each step
    const toggleStep = (index) => {
        setActiveSteps((prevActiveSteps) =>
            prevActiveSteps.includes(index)
                ? prevActiveSteps.filter((step) => step !== index)
                : [...prevActiveSteps, index]
        );
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-start font-BlackOps"
            style={{
                background: 'linear-gradient(135deg, #000428, #2c5364, #541388, #2a2a72, #0f0c29)',
                backgroundSize: '400% 400%',
                animation: 'galaxyGradient 15s ease infinite',
            }}
        >
            <Navbar />
            <h1 className="text-white text-4xl sm:text-5xl mt-24 text-center">Terminus</h1>

            {/* Image and Description */}
            <div className="w-full max-w-4xl mt-8 flex flex-col items-center px-4 text-center">
                <img
                    src={terminusImage}
                    alt="Terminus"
                    className="w-full rounded-lg shadow-lg max-w-3xl"
                />
                <p className="text-white text-sm sm:text-xl mt-4 px-4 md:px-8">
                    A jailbreak on a secluded island pits unlikely partners against the undead.
                    Unlock the laboratory's secrets, recruit a strangely familiar ally, and avenge
                    gruesome crimes against nature.
                </p>
            </div>

            {/* Dropdowns */}
            <div className="w-full max-w-7xl mt-8 space-y-6 mb-5">
                {/* Main Easter Egg Dropdown */}
                <div
                    className="bg-black text-white p-6 rounded-lg cursor-pointer flex justify-between items-center"
                    onClick={() => setShowMainEasterEgg(!showMainEasterEgg)}
                >
                    <h2 className="text-2xl flex items-center space-x-2">
                        <span>1.</span>
                        <span>Main Easter Egg</span>
                    </h2>
                    <span className="text-3xl">
                        {showMainEasterEgg ? '▲' : '▼'}
                    </span>
                </div>

                {showMainEasterEgg && (
                    <div className="bg-gray-900 text-white p-6 rounded-lg space-y-4">
                        {MainEasterEggSteps.map((step, index) => (
                            <div
                                key={index}
                                onClick={() => toggleStep(index)}
                                className={`cursor-pointer ${activeSteps.includes(index) ? 'text-green-400' : 'text-white'}`}
                            >
                                {/* Displaying the title instead of step */}
                                <p className="font-bold">{step.title}</p>

                                {/* Displaying description with conditional color change */}
                                {step.description && (
                                    <p className={`text-gray-400 mt-2 ${activeSteps.includes(index) ? 'text-green-400' : ''}`}>
                                        {step.description}
                                    </p>
                                )}


                                {step.image && Array.isArray(step.image) ? (
                                    // Stack images vertically on mobile, horizontally on larger screens
                                    <div className="flex flex-wrap space-x-4 mt-5 justify-center">
                                        {step.image.map((img, imgIndex) => (
                                            <div key={imgIndex} className="text-center">
                                                <img
                                                    src={img.src}
                                                    alt={`Step ${index + 1}  ${imgIndex + 1}`}
                                                    className="w-full sm:w-96 h-auto mb-4 sm:mb-0"  // Full width on mobile, 96px width on larger screens
                                                />
                                                <p
                                                    className={`text-white mt-2 sm:mt-0 mb-4 sm:mb-0 ${activeSteps.includes(index) ? 'text-green-400' : ''}`}
                                                >
                                                    {img.location}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : step.image && (
                                    <div className="text-center">
                                        <img
                                            src={step.image}
                                            alt={`Step ${index + 1}`}
                                            className="w-full sm:w-32 h-auto mt-2"  // Full width on mobile, 32px width on larger screens
                                        />
                                        <p
                                            className={`text-white mt-2 sm:mt-0 mb-4 sm:mb-0 ${activeSteps.includes(index) ? 'text-green-400' : ''}`}
                                        >
                                            {step.location}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}


                {/* Side Easter Egg Dropdown */}
                <div
                    className="bg-black text-white p-6 rounded-lg cursor-pointer flex justify-between items-center"
                    onClick={() => setShowSideEasterEgg(!showSideEasterEgg)}
                >
                    <h2 className="text-2xl flex items-center space-x-2">
                        <span>2.</span>
                        <span>Side Easter Egg</span>
                    </h2>
                    <span className="text-3xl">
                        {showSideEasterEgg ? '▲' : '▼'}
                    </span>
                </div>
                {showSideEasterEgg && (
                    <div className="bg-gray-900 text-white p-6 rounded-lg space-y-4">
                        {/* Sub-step 2.1 */}
                        <div
                            className="bg-black text-white p-4 rounded-lg cursor-pointer flex justify-between items-center"
                            onClick={() => setShowSubStepOne(!showSubStepOne)}
                        >
                            <h3 className="text-xl flex items-center space-x-2">
                                <span>2.1</span>
                                <span>Locate the Secret Room</span>
                            </h3>
                            <span className="text-2xl">
                                {showSubStepOne ? '▲' : '▼'}
                            </span>
                        </div>
                        {showSubStepOne && (
                            <div className="bg-gray-800 text-white p-4 rounded-lg space-y-2 ml-6">
                                <p className="hover:text-gray-400">Step A: Find the hidden door</p>
                                <p className="hover:text-gray-400">Step B: Solve the room puzzle</p>
                            </div>
                        )}

                        {/* Sub-step 2.2 */}
                        <div
                            className="bg-black text-white p-4 rounded-lg cursor-pointer flex justify-between items-center"
                            onClick={() => setShowSubStepTwo(!showSubStepTwo)}
                        >
                            <h3 className="text-xl flex items-center space-x-2">
                                <span>2.2</span>
                                <span>Find the Hidden Item</span>
                            </h3>
                            <span className="text-2xl">
                                {showSubStepTwo ? '▲' : '▼'}
                            </span>
                        </div>
                        {showSubStepTwo && (
                            <div className="bg-gray-800 text-white p-4 rounded-lg space-y-2 ml-6">
                                <p className="hover:text-gray-400">Step A: Search the island</p>
                                <p className="hover:text-gray-400">Step B: Unlock the chest</p>
                            </div>
                        )}

                        {/* Additional sub-steps can be added here following the same pattern */}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default TerminusMap;
