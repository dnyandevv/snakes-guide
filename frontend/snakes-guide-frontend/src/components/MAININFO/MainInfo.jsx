import SnakeCard from "../Info-Card";
import MainNav from "../MainNav";
import MapInfo from "./MapInfo";

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
    return (
        
        <div className="relative">
            <header className="bg-gray-500 fixed w-full z-10">
                <MainNav />
            </header>
            <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden bg-[#1A1A1A]">
                <img 
                    className="w-full h-full object-cover object-center shadow-2xl" 
                    src="/main/common.png"
                    alt="Common Krait"
                />
            </div>
            <main className="relative ">
                        <div className="flex flex-col flex-wrap max-w-[90%] mx-auto pt-12 z-10 bg-[#f7f8f2] px-6 pb-20 rounded-t-[2rem] -mt-12 shadow-2xl my-3">
                            <div className="p-1 bg-gray-100 w-full flex items-center justify-start gap-8 px-4">
                                <div className="w-[30%]">
                                    <h1 className="text-3xl">
                                        Common Krait
                                    </h1>
                                    <p className="text-xl text-gray-700">Bungarus caeruleus</p>
                                </div>
                                <div className="flex">
                                    <h1 className="text-xl rounded-[2rem] bg-yellow-300 justify-center items-center py-2 px-5 m-2">Venomous</h1>
                                    <h2 className="text-xl rounded-[0.5rem] bg-gray-300 justify-center items-center py-2 px-5 m-2">Indian Subregions</h2>
                                </div>
                            </div>
                            <div className="flex m-8">
                                <div className="bg-gray-200/50 rounded-[1rem] m-2 flex-[5]">
                                    <MapInfo snake_data={COMMON_KRAIT_DATA} />
                                </div>
                                <div className="bg-gray-100/70 rounded-[1rem] m-2 flex-[4]">
                                    <div className="flex flex-col justify-center items-center gap-4 p-4 m-8 ">
                                        <img 
                                            className="w-[80%] justify-center items-center flex-[2] rounded-[1rem] m-10"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6aC0YQxC9s_8XQqGyg6zNejqajO1hDeDRw&s" alt="head" />
                                        <img 
                                            className="w-[80%] justify-center object-contain items-center flex-[2] rounded-[1rem] m-10"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6aC0YQxC9s_8XQqGyg6zNejqajO1hDeDRw&s" alt="b" />
                                        
                                        <div className="flex-[1] m-10 flex flex-col justify-center items-center p-4">
                                            <h1 className="font-bold m-2 self-start">LOOKALIKE</h1>
                                            <SnakeCard 
                                                name="Indian Cobra" 
                                                scientificName="Naja naja" 
                                                type="Venomous" 
                                                image="/the-big-four/kc.png"
                                            />
                                            <button
                                                className="bg-gray-500 m-2 rounded-full text-white px-4 py-2 hover:bg-gray-700 transition-colors"
                                            >
                                                Compare
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>                       
                        </div>

                        <footer className="bg-gray-500 text-white text-center py-4 mt-12">
                            &copy; {new Date().getFullYear()} Saapmahiiite. Made for educational purposes. @Dnyan_dev
                        </footer>
            </main>

        </div>
    )
}