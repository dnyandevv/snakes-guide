import { useRef } from "react";
import SnakeCard from "../Info-Card";
import MainNav from "../MainNav";
import MapInfo from "./MapInfo";
import Modal from "../Modal/Modal";

const COMMON_KRAIT_DATA = {
  id: "common-krait",
  commonName: "Common Krait",
  scientificName: "Bungarus caeruleus",
  venomStatus: "Venomous",
  dangerLevel: "Extreme", // High, Medium, Low
  tags: ["Nocturnal", "Big Four", "Terrestrial"],
  headerImage: "/main/common.png",
  
  overview: {
    description: "The Common Krait is one of the most dangerous snakes in South Asia. Known for its glossy black scales and thin white crossbands, it is a member of the 'Big Four'—the four species responsible for the most snakebites in India.",
    temperament: "Generally shy and docile during the day, but becomes active and more defensive at night."
  },

  habitatDiet: {
    regions: ["India", "Pakistan", "Sri Lanka", "Bangladesh", "Nepal"],
    environment: "Fields, low scrub jungles, and often found near human habitations searching for prey.",
    prey: "Primarily feeds on other snakes, lizards, and small mammals."
  },

  identification: {
    color: "Glossy black, pale blue, or dark brown.",
    patterns: "40–50 thin white crossbands that may be indistinct or absent near the head.",
    eyes: "Small, dark eyes with round pupils.",
    scales: "Hexagonal vertebral scales (the scales running along the spine) are noticeably enlarged."
  },

  safety: {
    firstAid: "Immobilize the bitten limb, keep the patient calm, and seek immediate anti-venom treatment at a hospital. Do not use a tourniquet or cut the wound.",
    prevention: "Wear boots when walking in tall grass at night and use a flashlight."
  },

  mapData: {
    distributionImage: "/maps/common-krait-range.png",
    activeHotspots: ["Western Ghats", "Indo-Gangetic Plain"]
  }
};



export default function MainInfo() {
    const modalref = useRef();
    
    function openModal() {
        modalref.current.open();
    }

    return (
        <div className="relative">
            <div><Modal snakeId="common-krait" ref={modalref} /></div>
            <header className="bg-gray-500 fixed w-full z-20">
                <MainNav />
            </header>



            <div className="w-full h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden bg-[#1A1A1A]">
                <img 
                    className="w-full h-full object-cover object-center shadow-2xl" 
                    src="/main/common.png"
                    alt="Common Krait"
                />
            </div>



            <main className="relative ">

                        <div className="flex flex-col max-w-[95%] md:max-w-[90%] mx-auto pt-8 md:pt-12 z-10 bg-[#f7f8f2] px-4 md:px-6 pb-12 md:pb-20 rounded-t-[2rem] -mt-12 shadow-2xl my-3">
                            
                            
                            <div className="bg-gray-100 w-full flex md:flex-row flex-col items-start md:items-center justify-start p-4 gap:4 md:gap-8 p-4 rounded-xl ">
                                <div className="w-full md:w-[30%]">
                                    <h1 className="text-2xl md:text-3xl font-bold">Common Krait</h1>
                                    <p className="text-lg md:text-xl text-gray-700 italic">Bungarus caeruleus</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-sm md:text-xl rounded-full bg-yellow-300 py-1 px-4 font-semibold"
                                    >
                                        Venomous
                                    </span>
                                    <span className="text-sm md:text-xl rounded-lg bg-gray-300  py-1 px-4"
                                    >
                                        Indian Subregions
                                    </span>
                                </div>
                            </div>



                            <div className="flex flex-col lg:flex-row mt-6 md:m-8 gap-4">


                                <div className="bg-gray-200/50 rounded-[1rem] w-full p-2 flex-[5]">
                                    <MapInfo snake_data={COMMON_KRAIT_DATA} />
                                </div>


                                <div className="bg-gray-100/70 rounded-[1rem] m-2 flex-[4]">
                                    <div className="flex flex-col justify-center items-center gap-6 p-6">
                                        <div className="flex flex-row lg:flex-col gap-4 w-ful justify-center md:items-center">
                                            <img 
                                                className="w-1/2 lg:w-[80%] aspect-square object-cover rounded-[1rem] shadow-md"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6aC0YQxC9s_8XQqGyg6zNejqajO1hDeDRw&s" alt="head" />
                                            <img 
                                                className="w-1/2 lg:w-[80%] aspect-square object-cover rounded-[1rem] shadow-md"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6aC0YQxC9s_8XQqGyg6zNejqajO1hDeDRw&s" alt="b" />
                                            
                                        </div>


                                        <div className="w-full flex flex-col justify-center items-center">
                                            <h1 className="font-bold mb-4 self-start border-b-2 border-gray-400 w-full">LOOKALIKE</h1>
                                            <div className="w-full max-w-[300px]">
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