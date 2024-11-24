import React from 'react';

function Donate() {
    const buttonStyle = {
        textAlign: 'center',
        border: 'none',
        borderRadius: '1.5rem',
        minWidth: '11.625rem',
        padding: '0 2rem',
        height: '2.625rem',
        fontWeight: 'bold',
        backgroundColor: '#FFD140', // Yellow color
        color: '#000000', // Text color
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
        fontSize: '1rem',
        lineHeight: '1.25rem',
        cursor: 'pointer',
    };

    const hoverStyle = {
        backgroundColor: '#FFB600', // Slightly darker yellow for hover effect
    };

    return (
        <div>
            <dialog id="my_modal_1" className="modal text-black">
                <div className="modal-box">
                    <h3 className="font-bold text-3xl text-center mb-5">Help Support our Website!</h3>
                    <p className="py-4">
                        Your support helps keep this website running and ad-free, ensuring that all updates remain completely free for everyone. Thank you for your generosity and support! 😊
                    </p>

                    {/* PayPal donation form */}
                    <div className="py-4 text-center">
                        <form 
                            action="https://www.paypal.com/ncp/payment/X2DKJGPHM5FY8" 
                            method="post" 
                            target="_blank" // This will open the PayPal page in a new tab
                            style={{ display: 'inline-grid', justifyItems: 'center', alignContent: 'start', gap: '0.5rem' }}
                        >
                            <input 
                                className="pp-X2DKJGPHM5FY8" 
                                type="submit" 
                                value="Donate" 
                                style={buttonStyle} // Apply button styles
                                onMouseOver={(e) => e.target.style.backgroundColor = hoverStyle.backgroundColor} // Change color on hover
                                onMouseOut={(e) => e.target.style.backgroundColor = '#FFD140'} // Reset color when mouse leaves
                            />
                            <img 
                                src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" 
                                alt="cards" 
                            />
                            <section>
                                Powered by 
                                <img 
                                    src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" 
                                    alt="paypal" 
                                    style={{ height: '0.875rem', verticalAlign: 'middle' }}
                                />
                            </section>
                        </form>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* Close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default Donate;
