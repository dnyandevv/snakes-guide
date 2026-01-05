import SnakeCard from "./Info-Card";


export default function Homepage() {
    const SNAKE_DATA = [
        { id:"cobra",name: "Indian Cobra", scientificName: "Naja naja", type: "Venomous", image: "/the-big-four/kc.png" },
        { id:"common-krait", name: "Common Krait", scientificName: "Bungarus caeruleus", type: "Venomous", image: "/the-big-four/ck.png" },
        { id:"russells-viper", name: "Russell's Viper", scientificName: "Daboia russelii", type: "Venomous", image: "/the-big-four/rv.png" },
        { id:"saw-scaled-viper", name: "Saw-scaled Viper", scientificName: "Echis carinatus", type: "Venomous", image: "/the-big-four/sv.jpg" },
    ];

    return (
        <>
            <div>
                <h2 className="sm:mt-10 text-3xl font-bold text-green-900 font-serif mb-6 pl-4">
                    The Big Four
                </h2>
                <div className="flex gap-4 overflow-x-auto pb-4 justify-evenly">
                    {SNAKE_DATA.map((snake) => (
                        <div         
                            className="min-w-[280px] max-w-[300px] flex">
                            <SnakeCard
                                id={snake.id}
                                {...snake} 
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="m-4">
                <h2 className="text-3xl font-bold text-green-900 font-serif mb-6 pl-1 pt-8">
                    The Confussion Matrix
                </h2>
                <div className="flex flex-col justify-center">
                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory justify-evenly">
                        <SnakeCard 
                            name="Wolf Snake"
                            type="Non-Venomous"
                            scientificName="Lycodon aulicus"
                            image={'/the-big-four/wolf-snake.jpg'}
                        />
                        <div className="flex justify-center items-center"><p className="text-6xl font-bold text-emerald-600">?</p></div>
                        <SnakeCard 
                            name="Common Krait"
                            type="Venomous"
                            scientificName="Bungarus caeruleus"
                            image={'/the-big-four/ck.png'}
                        />
                    </div>
                    <div className="text-center">
                        <button className="bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-6 shadow-lg transition-colors duration-300 drop-shadow-md"
                        >
                            Compare
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}