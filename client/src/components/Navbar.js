import React from 'react';

function Navbar() {
    return (
        <div className="navbar bg-base-100 font-BlackOps">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li><a className="text-lg">Home</a></li>
                        <li>
                            <details>
                                <summary className="text-lg">Easter Egg</summary>
                                <ul className="p-2">
                                    <li><a className="text-base">Liberty Falls</a></li>
                                    <li><a className="text-base">Terminus</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a className="text-lg">About Us</a></li>
                        <li><a className="text-lg">Contact</a></li>
                    </ul>
                </div>

                <a className="btn btn-ghost text-2xl tracking-wide">
                    Hidden
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Eggs
                    </span>
                </a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="text-lg">Home</a></li>
                    <li>
                        <details>
                            <summary className="text-lg">Easter Egg</summary>
                            <ul className="p-2">
                                <li><a className="text-base">Liberty Falls</a></li>
                                <li><a className="text-base">Terminus</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a className="text-lg">About Us</a></li>
                    <li><a className="text-lg">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* Donate Button Style */}
                <a className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md shadow-lg hover:from-purple-600 hover:to-blue-600 transition duration-300 text-lg mr-2 lg:text-xl lg:py-3 lg:px-6">
                    Donate
                </a>
            </div>
        </div>
    );
}

export default Navbar;
