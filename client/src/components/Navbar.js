import React from 'react';
import { NavLink } from 'react-router-dom';
import ContactPopUp from './ContactPopUp';
import Donate from './Donate';

function Navbar() {
    const openContactModal = () => {
        document.getElementById('my_modal_3').showModal();
    };

    const openDonateModal = () => {
        document.getElementById('my_modal_1').showModal();
    };
    return (
        <div className="navbar bg-black text-white font-BlackOps">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <NavLink
                                to="/home"
                                className={({ isActive }) =>
                                    `text-lg ${isActive ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text' : ''}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <details>
                                <summary className="text-lg">Easter Egg</summary>
                                <ul className="p-2">
                                    <li>
                                        <NavLink
                                            to="/liberty-falls"
                                            className={({ isActive }) =>
                                                `text-base ${isActive ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text' : ''}`
                                            }
                                        >
                                            Liberty Falls
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/terminus"
                                            className={({ isActive }) =>
                                                `text-base ${isActive ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text' : ''}`
                                            }
                                        >
                                            Terminus
                                        </NavLink>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li><a onClick={openContactModal} className="text-lg cursor-pointer">Contact</a></li>

                    </ul>
                </div>

                <NavLink to="/home" className="btn btn-ghost text-2xl tracking-wide text-white">
                    Hidden
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Eggs
                    </span>
                </NavLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                `text-lg ${isActive ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text' : ''}`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <details>
                            <summary className="text-lg">Easter Egg</summary>
                            <ul className="p-2 text-white bg-black">
                                <li>
                                    <NavLink
                                        to="/liberty-falls"
                                        className={({ isActive }) =>
                                            `text-base ${isActive ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text' : ''}`
                                        }
                                    >
                                        Liberty Falls
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/terminus"
                                        className={({ isActive }) =>
                                            `text-base ${isActive ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text' : ''}`
                                        }
                                    >
                                        Terminus
                                    </NavLink>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li><a onClick={openContactModal} className="text-lg cursor-pointer">Contact</a></li>

                </ul>
            </div>

            <div className="navbar-end cursor-pointer">
                <a onClick={openDonateModal} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:from-purple-600 hover:to-blue-600 transition duration-300 text-lg mr-2 lg:text-xl lg:py-3 lg:px-6 shadow-black">
                    Donate
                </a>
            </div>
            {/* Include the ContactPopUp component */}
            <ContactPopUp />
            <Donate />

        </div>
    );
}

export default Navbar;
