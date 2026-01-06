import SnakeInfooNav from "./Snake-info-nav";
import SnakeCard from "./Info-Card";
import { useEffect, useState } from "react";
import { fetchSnakes } from "../Utils/data_fetch.js";

export default function SnakeInfo() {

    const [SNAKE_DATA, setSnakeData] = useState({});

    useEffect(() => {
        fetchSnakes().then(data => {
            const dataArray = Array.isArray(data) ? data : Object.values(data);
            setSnakeData(dataArray);
        });
    }, []);

    const [sortbasedon, setsortbasedon] = useState('all');
    function handleclick(e){
        setsortbasedon(e);
    }

    const FSNAKES = Array.isArray(SNAKE_DATA) 
    ? SNAKE_DATA.filter((snake) => {
        if (sortbasedon === 'all') return true;
        return snake.venom_status?.toLowerCase() === sortbasedon.toLowerCase();
      })
    : [];

    return (
        <>
            {sortbasedon &&
             (<>
                <SnakeInfooNav setbasedon={handleclick} sortstate={sortbasedon} data/>
                <div>
                    <div className="flex flex-wrap gap-4 overflow-y-auto pb-4  justify-evenly">
                        {FSNAKES.map((snake) => (
                            <div className="min-w-[280px] max-w-[300px] flex">
                                <SnakeCard key={snake.common_name} 
                                    name={snake.common_name} 
                                    scientificName={snake.scientific_name} 
                                    type={snake.venom_status} 
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