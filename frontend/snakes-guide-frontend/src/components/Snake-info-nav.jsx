

export default function SnakeInfoo({setbasedon, sortstate}) {
    
    function handleVemous(){
        setbasedon("venomous");
    }
    function handlePattern(){
        setbasedon("snakesinfo");
    }
    function handleHabitat(){
        setbasedon("contact");
    }

    return (
        <header>
            <nav className="flex justify-between gap-8 p-4">
                <ul className="flex gap-4">
                    <li>
                            <button
                                onClick={() => handleVemous()}
                                className={
                                    sortstate === "venomous" ? "border-b-2 border-green-500 pb-1 text-gray-800 text-md p-5" : " p-5 hover:border-b-2 pb-1 transition-all text-black"
                                }
                            >
                                Venomous
                            </button>
                    </li>
                    <li>
                            <button 
                                onClick={() => handlePattern()}
                                className={
                                    sortstate === "snakesinfo" ? "border-b-2 border-green-500 pb-1 text-gray-800 text-md p-5" : " p-5 hover:border-b-2 pb-1 transition-all text-black"
                                }
                            >
                                Availbility
                            </button>
                    </li>
                    <li>
                            <button 
                                onClick={() => handleHabitat()}
                                className={
                                    sortstate === "contact" ? "border-b-2 border-green-500 pb-1 text-gray-800 text-md p-5" : " p-5 hover:border-b-2 pb-1 transition-all text-black"
                                }
                            >
                                Contact
                            </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}