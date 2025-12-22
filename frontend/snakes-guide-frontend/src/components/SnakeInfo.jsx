import SnakeInfooNav from "./Snake-info-nav";
import SnakeCard from "./Info-Card";
import { useState } from "react";

export default function SnakeInfo() {
   
    const SNAKE_DATA = [
        { name: "Indian Cobra", scientificName: "Naja naja", type: "Venomous", image: "/the-big-four/kc.png" },
        { name: "Common Krait", scientificName: "Bungarus caeruleus", type: "Venomous", image: "/the-big-four/ck.png" },
        { name: "Russell's Viper", scientificName: "Daboia russelii", type: "Venomous", image: "/the-big-four/rv.png" },
        { name: "Saw-scaled Viper", scientificName: "Echis carinatus", type: "Venomous", image: "/the-big-four/sv.jpg" },
        { name: "Indian Cobra", scientificName: "Naja naja", type: "Venomous", image: "/the-big-four/kc.png" },
        { name: "Common Krait", scientificName: "Bungarus caeruleus", type: "Venomous", image: "/the-big-four/ck.png" },
        { name: "Russell's Viper", scientificName: "Daboia russelii", type: "Venomous", image: "/the-big-four/rv.png" },
        { name: "Saw-scaled Viper", scientificName: "Echis carinatus", type: "Venomous", image: "/the-big-four/sv.jpg" },
        { name: "Indian Cobra", scientificName: "Naja naja", type: "Venomous", image: "/the-big-four/kc.png" },
        { name: "Common Krait", scientificName: "Bungarus caeruleus", type: "Venomous", image: "/the-big-four/ck.png" },
        { name: "Russell's Viper", scientificName: "Daboia russelii", type: "Venomous", image: "/the-big-four/rv.png" },
        { name: "Saw-scaled Viper", scientificName: "Echis carinatus", type: "Venomous", image: "/the-big-four/sv.jpg" },
        { name: "Indian Cobra", scientificName: "Naja naja", type: "Venomous", image: "/the-big-four/kc.png" },
        { name: "Common Krait", scientificName: "Bungarus caeruleus", type: "Venomous", image: "/the-big-four/ck.png" },
        { name: "Russell's Viper", scientificName: "Daboia russelii", type: "Venomous", image: "/the-big-four/rv.png" },
        { name: "Saw-scaled Viper", scientificName: "Echis carinatus", type: "Venomous", image: "/the-big-four/sv.jpg" },

    ];

    const [sortbasedon, setsortbasedon] = useState('venomous');
    function handleclick(e){
        setsortbasedon(e);
    }

    return (
        <>
            {sortbasedon &&
             (<>
                <SnakeInfooNav setbasedon={handleclick} sortstate={sortbasedon}/>
                <div>
                    <div className="flex flex-wrap gap-4 overflow-y-auto pb-4  justify-evenly">
                        {SNAKE_DATA.map((snake) => (
                            <div className="min-w-[280px] max-w-[300px] flex">
                                <SnakeCard key={snake.name} {...snake} />
                            </div>
                        ))}
                    </div>
                </div>
             </>)   
            }
        </>
        
    )
}