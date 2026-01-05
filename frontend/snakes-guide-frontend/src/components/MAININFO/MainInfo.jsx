import { useRef, useState, useEffect } from "react";
import SnakeCard from "../Info-Card";
import MainNav from "../MainNav";
import MapInfo from "./MapInfo";
import Modal from "../Modal/Modal";
import { useParams } from "react-router";
import { fetchSnakeById } from "../../Utils/data_fetch.js";

export default function MainInfo() {
    const modalref = useRef();
    const {id} = useParams();
    const [snakeDataById, setSnakeDataById] = useState(null);

    useEffect(() => {
        fetchSnakeById(id).then(data => {
            setSnakeDataById(data);
        });
    }, [id]);

    function openModal() {
        modalref.current.open();
    }

    if (!snakeDataById) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
        <div className="relative">
            <div><Modal id={id} id2={null} ref={modalref} /></div>
            <header className="bg-gray-500 sticky top-0 md:fixed w-full md:z-20">
                <MainNav />
            </header>
            <div className="w-full h-auto bg-[#1A1A1A]">
                <img 
                    className="w-full h-auto object-cover object-contain shadow-2xl" 
                    src={snakeDataById.header_image}
                    alt={snakeDataById.common_name}
                />
            </div>

            <main className="relative ">

                        <div className="flex flex-col max-w-[95%] md:max-w-[90%] mx-auto pt-8 md:pt-12 z-10 bg-[#f7f8f2] px-4 md:px-6 pb-12 md:pb-20 rounded-t-[2rem] -mt-5 lg:-mt-12 shadow-2xl my-3">
                            
                            
                            <div className="bg-gray-100 w-full flex md:flex-row flex-col items-start md:items-center justify-start p-4 gap:4 md:gap-8 p-4 rounded-xl ">
                                <div className="w-full md:w-[30%]">
                                    <h1 className="text-2xl md:text-3xl font-bold">{snakeDataById.common_name}</h1>
                                    <p className="text-lg md:text-xl text-gray-700 italic">{snakeDataById.scientific_name}</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-sm md:text-xl rounded-full bg-yellow-300 py-1 px-4 font-semibold"
                                    >
                                        {snakeDataById.venom_status}
                                    </span>
                                    <span className="text-sm md:text-xl rounded-lg bg-gray-300  py-1 px-4"
                                    >
                                        Indian Subregions
                                    </span>
                                </div>
                            </div>



                            <div className="flex flex-col lg:flex-row mt-6 md:m-8 gap-4 lg:items-start">


                                <div className="bg-gray-200/50 rounded-[1rem] w-full p-2 flex-[5]">
                                    <MapInfo snake_data={snakeDataById.data} />
                                </div>


                                <div className="bg-gray-100/70  rounded-[1rem] m-2 flex-[4] lg:sticky lg:top-10 lg:self-start">
                                    <div className="flex flex-col justify-center items-center gap-6 p-6">
                                    
                                        <div className="w-full flex flex-col justify-center items-center">
                                            <h1 className="font-bold mb-4 self-start border-b-2 border-gray-400 w-full">LOOKALIKE</h1>
                                            <div className="w-full max-w-[200px]">
                                                <SnakeCard 
                                                    name="Indian Cobra" 
                                                    scientificName="Naja naja" 
                                                    type="Venomous" 
                                                    image="/the-big-four/kc.png"
                                                />
                                            </div>
                                            <button
                                                className="mt-4 bg-gray-600 w-full sm:w-auto rounded-full text-white px-8 py-2 hover:bg-gray-800 transition-colors font-medium"
                                                onClick={openModal}
                                            >
                                                Compare
                                            </button>
                                            <h1 className="font-bold my-4 self-start border-b-2 border-gray-400 w-full"> </h1>
                                        </div>

                                        <div className="flex flex-row lg:flex-col gap-4 w-ful xl:flex-row justify-center md:items-center">
                                            <img 
                                                className="w-1/2 lg:w-[80%] md:max-w-[200px] aspect-square object-cover rounded-[1rem] shadow-md"
                                                src="https://offgridweb.com/wp-content/uploads/2016/08/Infographic-snake-bite-first-aid-1.jpg" alt="head" />
                                            <img 
                                                className="w-1/2 lg:w-[80%] md:max-w-[200px] aspect-square object-cover rounded-[1rem] shadow-md"
                                                src="https://allens-training-assets.spicyweb.net.au/main/_1920xAUTO_crop_center-center_80_none/85512/Snake-bite.webp" alt="b" />
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>                       
                        </div>

                        <footer className="bg-gray-500 text-white text-center py-6 mt-12 text-sm">
                            &copy; {new Date().getFullYear()} Saapmahiiite. Made for educational purposes. @Dnyan_dev
                        </footer>
            </main>

        </div>
    )
}