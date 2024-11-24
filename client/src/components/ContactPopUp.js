import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

function ContactPopUp() {
    const [message, setMessage] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [alertType, setAlertType] = useState(''); // 'success' or 'error'
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
        // Ensure user email and message are present
        if (!userEmail || !message || !subject) {
            alert("Please fill out all fields before sending.");
            return;
        }

        // Prepare the email data according to your template
        const emailData = {
            subject: subject, // Subject from the user input
            user_email: userEmail, // User's email
            message: message, // Message from the textarea
        };

        // Send the email using EmailJS
        emailjs.send('service_6yjvo48', 'template_no8n6zs', emailData, 'PnxEJdFPtRShqkXqO')
            .then(response => {
                console.log('Message sent successfully:', response);
                setAlertType('success'); // Set the alert type to success
                alert('Your message has been sent!');
                // Reset form after sending
                setUserEmail('');
                setSubject('');
                setMessage('');
                setWordCount(0);
            })
            .catch(error => {
                console.error('Error sending message:', error);
                setAlertType('error'); // Set the alert type to error
                alert('There was an error sending your message. Please try again later.');
            });
    };

    return (
        <dialog id="my_modal_3" className="modal text-black">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-3xl text-center mb-3">Send a Message!</h3>

                {/* Success or Error alert */}
                {alertType === 'success' && (
                    <div role="alert" className="alert alert-success mb-3">
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
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>Your message has been sent successfully!</span>
                    </div>
                )}
                {alertType === 'error' && (
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
                        <span>There was an error sending your message. Please try again later.</span>
                    </div>
                )}

                {/* From email input */}
                <label className="form-control w-full mb-3">
                    <div className="label">
                        <span className="label-text text-xl">Email:</span>
                    </div>
                    <input 
                        type="email" 
                        placeholder="Enter email address" 
                        className="input input-bordered w-full text-sm"
                        value={userEmail} 
                        onChange={(e) => setUserEmail(e.target.value)} 
                    />
                </label>

                {/* Subject input */}
                <label className="form-control w-full mb-5">
                    <div className="label">
                        <span className="label-text text-xl">Subject</span>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Enter your subject" 
                        className="input input-bordered w-full text-sm"
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                    />
                </label>

                {/* Message input */}
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
