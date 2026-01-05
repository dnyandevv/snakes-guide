export default function SnakeInfoo({ setbasedon, sortstate }) {
    
    const tabs = [
        { id: "all", label: "All Species" },
        { id: "venomous", label: "Venomous" },
        { id: "non-venomous", label: "Non-Venomous" }
    ];

    return (
        <header className="border-b pb-4">
            <nav className="flex justify-center border-b border-gray-100">
                <ul className="flex overflow-x-auto no-scrollbar gap-2 px-4">
                    {tabs.map((tab) => (
                        <li key={tab.id}>
                            <button
                                onClick={() => setbasedon(tab.id)}
                                className={`
                                    whitespace-nowrap px-4 py-4 text-sm font-bold transition-all
                                    ${sortstate === tab.id 
                                        ? "border-b-4 border-green-600 text-green-700" 
                                        : "text-gray-500 hover:text-gray-700 border-b-4 border-transparent"}
                                `}
                            >
                                {tab.label.toUpperCase()}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}