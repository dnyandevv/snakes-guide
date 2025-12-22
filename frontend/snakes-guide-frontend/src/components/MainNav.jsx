import { NavLink } from "react-router";

export default function MainNav() {
    return (
        <header>
            <nav className="flex justify-between gap-8 p-4">
                <h1 className="text-white"
                >
                    SNAKES INFO
                </h1>
                <ul className="flex gap-4">
                    <li>
                            <NavLink
                            end={true} 
                            to='/'
                            className={({isActive})=>
                                isActive ? "text-green-500" : "text-white"
                            }
                            >
                                Hompage
                            </NavLink>
                    </li>
                    <li>
                            <NavLink 
                            to='/snakes-info'
                            className={({isActive})=>
                                isActive ? "text-green-500" : "text-white"
                            }
                            >
                                Snakes Info
                            </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}