import React, { useState } from 'react';

function ContactPopUp() {
    const [message, setMessage] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const maxWords = 500;

    const handleChange = (event) => {
        const input = event.target.value;
        const words = input.trim().split(/\s+/).filter(word => word.length > 0);
        const count = words.length;

        if (count <= maxWords) {
            setMessage(input);
            setWordCount(count);
            if (showAlert) {
                setShowAlert(false); // Hide the alert if word count is within limit
            }
        } else {
            setShowAlert(true); // Show the alert if the limit is exceeded
        }
    };

    const handleSend = () => {
        // Add your send logic here
        console.log("Message sent:", message);
    };

    return (
        <dialog id="my_modal_3" className="modal text-black">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-3xl text-center mb-3">Send a Message!</h3>
                
                {/* Alert for word limit */}
                {showAlert && (
                    <div role="alert" className="alert alert-error mb-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>Error! Maximum word limit of {maxWords} reached.</span>
                    </div>
                )}

                <label className="form-control w-full mb-3">
                    <div className="label">
                        <span className="label-text text-xl">From:</span>
                    </div>
                    <input type="text" placeholder="Enter email address" className="input input-bordered w-full text-sm" />
                </label>
                <label className="form-control w-full mb-5">
                    <div className="label">
                        <span className="label-text text-xl">Subject</span>
                    </div>
                    <input type="text" placeholder="Enter your subject" className="input input-bordered w-full text-sm" />
                </label>
                <label className="form-control">
                    <textarea
                        className="textarea textarea-bordered h-24 w-full text-sm"
                        placeholder="Enter your message (500 words max)"
                        value={message}
                        onChange={handleChange}
                    ></textarea>
                </label>
                <div className="mt-2 text-sm text-gray-600">
                    {wordCount} / {maxWords} words
                </div>
                
                {/* Send button */}
                <div className="flex justify-end mt-4">
                    <button 
                        type="button" 
                        className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white tracking-widest" 
                        onClick={handleSend}
                    >
                        Send
                    </button>
                </div>
            </div>
        </dialog>
    );
}

export default ContactPopUp;
