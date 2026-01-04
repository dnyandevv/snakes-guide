import { useState } from "react";
import { NavLink } from "react-router";

export default function MainNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Cleaner link logic: removed bulky padding, added subtle hover effects
    const linkClasses = ({ isActive }) =>
        `transition-all duration-300 py-2 px-4 md:py-1 md:px-0 ${
            isActive
                ? "text-green-400 border-b-2 border-green-400"
                : "text-white hover:text-green-200"
        }`;

    return (
        <header className="bg-gray-900/95 backdrop-blur-sm w-full shadow-lg border-b border-white/10">
            <nav className="flex flex-wrap items-center justify-between p-4 max-w-7xl mx-auto">
                {/* Logo with better spacing */}
                <h1 className="text-white font-serif text-2xl tracking-tighter">
                    SAAP<span className="text-green-500">MAHIIITE</span>
                </h1>

                {/* Mobile Hamburger Button */}
                <button 
                    onClick={toggleMenu}
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>

                {/* Navigation Links */}
                <ul className={`${
                    isOpen ? "flex opacity-100 scale-y-100" : "hidden md:flex opacity-0 md:opacity-100"
                } flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 gap-2 md:gap-8 items-center origin-top transition-all duration-300`}>
                    
                    <li className="w-full md:w-auto text-center">
                        <NavLink end to='/' className={linkClasses} onClick={() => setIsOpen(false)}>
                            Homepage
                        </NavLink>
                    </li>
                    <li className="w-full md:w-auto text-center">
                        <NavLink to='/snakes-info' className={linkClasses} onClick={() => setIsOpen(false)}>
                            Snakes Info
                        </NavLink>
                    </li>
                    <li className="w-full md:w-auto text-center">
                        <NavLink to='/contact' className={linkClasses} onClick={() => setIsOpen(false)}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}