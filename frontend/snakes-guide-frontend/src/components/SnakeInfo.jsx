import SnakeInfooNav from "./Snake-info-nav";
import SnakeCard from "./Info-Card";
import { useState } from "react";
import SNAKES_DATA from "../Utils/full_data.js";

export default function SnakeInfo() {
   
    // const SNAKE_DATA = [
    //     { id:"wolf-snake" ,name:"Wolf Snake", type:"Non-Venomous", scientificName:"Lycodon aulicus", image:'/the-big-four/wolf-snake.jpg'},
    //     { id:"cobra",name: "Indian Cobra", scientificName: "Naja naja", type: "Venomous", image: "/the-big-four/kc.png" },
    //     { id:"common-krait", name: "Common Krait", scientificName: "Bungarus caeruleus", type: "Venomous", image: "/the-big-four/ck.png" },
    //     { id:"russells-viper", name: "Russell's Viper", scientificName: "Daboia russelii", type: "Venomous", image: "/the-big-four/rv.png" },
    //     { id:"wolf-snake" ,name:"Wolf Snake", type:"Non-Venomous", scientificName:"Lycodon aulicus", image:'/the-big-four/wolf-snake.jpg'},        
    //     { id:"saw-scaled-viper", name: "Saw-scaled Viper", scientificName: "Echis carinatus", type: "Venomous", image: "/the-big-four/sv.jpg" },
    //     { id:"cobra",name: "Indian Cobra", scientificName: "Naja naja", type: "Venomous", image: "/the-big-four/kc.png" },
    //     { id:"common-krait", name: "Common Krait", scientificName: "Bungarus caeruleus", type: "Venomous", image: "/the-big-four/ck.png" },
    //     { id:"russells-viper", name: "Russell's Viper", scientificName: "Daboia russelii", type: "Venomous", image: "/the-big-four/rv.png" },
    //     { id:"saw-scaled-viper", name: "Saw-scaled Viper", scientificName: "Echis carinatus", type: "Venomous", image: "/the-big-four/sv.jpg" },
    //     { id:"cobra",name: "Indian Cobra", scientificName: "Naja naja", type: "Venomous", image: "/the-big-four/kc.png" },
    //     { id:"wolf-snake" ,name:"Wolf Snake", type:"Non-Venomous", scientificName:"Lycodon aulicus", image:'/the-big-four/wolf-snake.jpg'},
    //     { id:"common-krait", name: "Common Krait", scientificName: "Bungarus caeruleus", type: "Venomous", image: "/the-big-four/ck.png" },
    //     { id:"wolf-snake" ,name:"Wolf Snake", type:"Non-Venomous", scientificName:"Lycodon aulicus", image:'/the-big-four/wolf-snake.jpg'},
    //     { id:"russells-viper", name: "Russell's Viper", scientificName: "Daboia russelii", type: "Venomous", image: "/the-big-four/rv.png" },
    //     { id:"saw-scaled-viper", name: "Saw-scaled Viper", scientificName: "Echis carinatus", type: "Venomous", image: "/the-big-four/sv.jpg" },
    //     { id:"cobra",name: "Indian Cobra", scientificName: "Naja naja", type: "Venomous", image: "/the-big-four/kc.png" },
    //     { id:"common-krait", name: "Common Krait", scientificName: "Bungarus caeruleus", type: "Venomous", image: "/the-big-four/ck.png" },
    //     { id:"wolf-snake" ,name:"Wolf Snake", type:"Non-Venomous", scientificName:"Lycodon aulicus", image:'/the-big-four/wolf-snake.jpg'},
    //     { id:"russells-viper", name: "Russell's Viper", scientificName: "Daboia russelii", type: "Venomous", image: "/the-big-four/rv.png" },
    //     { id:"saw-scaled-viper", name: "Saw-scaled Viper", scientificName: "Echis carinatus", type: "Venomous", image: "/the-big-four/sv.jpg" },

    // ];

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
                        {Object.values(SNAKES_DATA).map((snake) => (
                            <div className="min-w-[280px] max-w-[300px] flex">
                                <SnakeCard key={snake.commonName} 
                                    name={snake.commonName} 
                                    scientificName={snake.scientificName} 
                                    type={snake.venomStatus} 
                                    image={snake.image}
                                    id={snake.id}
                                />
                            </div>
                        ))}
                    </div>
                </div>
             </>)   
            }
        </>
        
    )
}