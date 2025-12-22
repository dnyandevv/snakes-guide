import { NavLink } from "react-router";

export default function MainNav() {
    return (
        <header>
            <nav className="flex justify-between gap-8 p-4">
                <h1 className="text-white font-serif"
                >
                    SAAPMAHIIITE
                </h1>
                <ul className="flex gap-4">
                    <li>
                            <NavLink
                            end={true} 
                            to='/'
                            className={({isActive})=>
                                isActive ? "border-b-2 border-green-500 pb-1 text-green-200 text-md p-5" : " p-5 hover:border-b-2 pb-1 transition-all text-white"
                            }
                            >
                                Hompage
                            </NavLink>
                    </li>
                    <li>
                            <NavLink 
                            to='/snakes-info'
                            className={({isActive})=>
                                isActive ? "border-b-2 border-green-500 pb-1 text-green-200 text-md p-5" : " p-5 hover:border-b-2 pb-1 transition-all text-white"
                            }
                            >
                                Snakes Info
                            </NavLink>
                    </li>
                    <li>
                            <NavLink 
                            to='/contact'
                            className={({isActive})=>
                                isActive ? "border-b-2 border-green-500 pb-1 text-green-200 text-md p-5" : " p-5 hover:border-b-2 pb-1 transition-all text-white"
                            }
                            >
                                Contact
                            </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}