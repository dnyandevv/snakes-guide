import { useRef, useState, useEffect } from "react";
import SnakeCard from "../Info-Card";
import MainNav from "../MainNav";
import MapInfo from "./MapInfo";
import Modal from "../Modal/Modal";
import { useParams } from "react-router";
import SNAKES_DATA from "../../Utils/full_data.js";
import { fetchSnakeById } from "../../Utils/data_fetch.js";

// const snakeDataById = {
//   "common-krait": {
//     id: "common-krait",
//     commonName: "Common Krait",
//     scientificName: "Bungarus caeruleus",
//     venomStatus: "Venomous",
//     dangerLevel: "Extreme",
//     tags: ["Nocturnal", "Big Four", "Terrestrial"],
//     headerImage: "/main/common.png",
//     overview: {
//       description: "The Common Krait is one of the most dangerous snakes in South Asia. Known for its glossy black scales and thin white crossbands, it is a member of the 'Big Four'.",
//       temperament: "Generally shy and docile during the day, but becomes active and more defensive at night."
//     },
//     habitatDiet: {
//       regions: ["India", "Pakistan", "Sri Lanka", "Bangladesh", "Nepal"],
//       environment: "Fields, low scrub jungles, and often found near human habitations searching for prey.",
//       prey: "Primarily feeds on other snakes, lizards, and small mammals."
//     },
//     identification: {
//       color: "Glossy black, pale blue, or dark brown.",
//       patterns: "40–50 thin white crossbands that may be indistinct or absent near the head.",
//       eyes: "Small, dark eyes with round pupils.",
//       scales: "Hexagonal vertebral scales (the scales running along the spine) are noticeably enlarged."
//     },
//     safety: {
//       firstAid: "Immobilize the bitten limb, keep the patient calm, and seek immediate anti-venom treatment. Do not use a tourniquet.",
//       prevention: "Wear boots when walking in tall grass at night and use a flashlight."
//     },
//     mapData: {
//       activeHotspots: ["Western Ghats", "Indo-Gangetic Plain"]
//     }
//   },

//   "cobra": {
//     id: "spectacled-cobra",
//     commonName: "Spectacled Cobra",
//     scientificName: "Naja naja",
//     venomStatus: "Venomous",
//     dangerLevel: "Extreme",
//     tags: ["Diurnal/Nocturnal", "Big Four", "Iconic"],
//     headerImage: "/main/cobra-header.png",
//     overview: {
//       description: "Also known as the Indian Cobra, it is famous for its impressive hood which often reveals a 'spectacle' mark on the back.",
//       temperament: "Alert and defensive; it will rear up and hiss loudly to warn off intruders but strikes if provoked."
//     },
//     habitatDiet: {
//       regions: ["India", "Pakistan", "Sri Lanka", "Bangladesh", "Nepal"],
//       environment: "Agricultural lands, forests, and often near human settlements where rodents are plentiful.",
//       prey: "Primarily feeds on rodents, frogs, toads, and occasionally birds."
//     },
//     identification: {
//       color: "Varies from tan and brown to grey or black.",
//       patterns: "Distinctive 'U' or 'O' shaped spectacle mark on the rear of the hood.",
//       eyes: "Medium-sized with round pupils.",
//       scales: "Smooth scales; a wide head that expands into a hood."
//     },
//     safety: {
//       firstAid: "Keep the victim calm, immobilize the limb, and transport to a hospital with anti-venom immediately.",
//       prevention: "Keep surroundings clear of debris; use a stick to disturb tall grass before walking."
//     },
//     mapData: {
//       distributionImage: "/maps/spectacled-cobra-range.png",
//       activeHotspots: ["Indo-Gangetic Plains", "Southern India"]
//     }
//   },

//   "russells-viper": {
//     id: "russells-viper",
//     commonName: "Russell's Viper",
//     scientificName: "Daboia russelii",
//     venomStatus: "Venomous",
//     dangerLevel: "Extreme",
//     tags: ["Nocturnal", "Big Four", "Ambush Predator"],
//     headerImage: "/main/russells.png",
//     overview: {
//       description: "Responsible for the highest number of serious snakebite incidents in India. It is a thick-bodied snake known for a very loud hiss.",
//       temperament: "Sluggish but highly irritable; it strikes with incredible speed and power from a coiled position."
//     },
//     habitatDiet: {
//       regions: ["India", "Pakistan", "Sri Lanka", "Bangladesh", "Nepal"],
//       environment: "Open grassy areas, scrub jungles, and farmlands. Avoids dense forests.",
//       prey: "Strictly carnivorous, feeding mostly on rodents."
//     },
//     identification: {
//       color: "Deep yellow, tan, or brown.",
//       patterns: "Three rows of dark brown spots with black/white borders resembling a chain.",
//       eyes: "Large eyes with gold flecks and vertical pupils.",
//       scales: "Strongly keeled scales (rough texture); head is distinctly triangular."
//     },
//     safety: {
//       firstAid: "Seek emergency medical help. Do not apply tight pressure bandages; local swelling is severe.",
//       prevention: "Avoid walking barefoot in fields; use a flashlight and wear thick boots."
//     },
//     mapData: {
//       activeHotspots: ["Western Coast", "Punjab", "West Bengal"]
//     }
//   },

//   "saw-scaled-viper": {
//     id: "saw-scaled-viper",
//     commonName: "Saw-scaled Viper",
//     scientificName: "Echis carinatus",
//     venomStatus: "Venomous",
//     dangerLevel: "Extreme",
//     tags: ["Nocturnal", "Big Four", "Aggressive"],
//     headerImage: "/main/saw-scaled-viper.png",
//     overview: {
//       description: "The smallest of the Big Four. It makes a rasping 'sawing' sound by rubbing its scales together when threatened.",
//       temperament: "Extremely defensive and quick to strike; moves in a 'sidewinding' motion."
//     },
//     habitatDiet: {
//       regions: ["India", "Pakistan", "Sri Lanka", "Middle East"],
//       environment: "Arid, rocky, and sandy regions. Often hides under rocks or loose bark.",
//       prey: "Scorpions, centipedes, large insects, frogs, and small rodents."
//     },
//     identification: {
//       color: "Grey, brown, or reddish ground color.",
//       patterns: "A distinctive '+' or 'bird's foot' mark on top of the head; white 'bow' shapes on sides.",
//       eyes: "Large eyes with vertical, slit-like pupils.",
//       scales: "Heavily keeled, serrated scales."
//     },
//     safety: {
//       firstAid: "Reach a hospital quickly. Venom causes severe blood-clotting issues; do not delay treatment.",
//       prevention: "Watch steps in rocky terrain; never reach into crevices with bare hands."
//     },
//     mapData: {
//       activeHotspots: ["Maharashtra", "Rajasthan", "Tamil Nadu"]
//     }
//   },

//   "wolf-snake": {
//     "id": "common-wolf-snake",
//     "commonName": "Common Wolf Snake",
//     "scientificName": "Lycodon aulicus",
//     "venomStatus": "Non-venomous",
//     "dangerLevel": "Low",
//     "tags": ["Nocturnal", "Harmless", "Mimic", "Urban-Adapter"],
//     "headerImage": "/main/wolf-snake.png",
//     "overview": {
//       "description": "A slender, nocturnal snake famous for its Batesian mimicry of the highly venomous Common Krait. Its name comes from its enlarged, fang-like front teeth used to grip slippery lizards.",
//       "temperament": "Nervous and defensive; will strike repeatedly and bite if handled, though it is not medically significant."
//     },
//     "habitatDiet": {
//       "regions": ["India", "Pakistan", "Sri Lanka", "Nepal", "Southeast Asia"],
//       "environment": "Highly adaptable; found in forests, gardens, and frequently inside human dwellings (cracks in walls, ceilings, and store rooms).",
//       "prey": "Primarily geckos and skinks; occasionally small frogs and rodents."
//     },
//     "identification": {
//       "color": "Dark brown, blackish, or greyish-brown.",
//       "patterns": "White or yellowish cross-bands that are prominent near the head and often fade toward the tail. Features a distinct white 'collar' on the neck.",
//       "eyes": "Small, bead-like eyes with round pupils (unlike the slit pupils of vipers).",
//       "scales": "Smooth and glossy scales. Unlike the Krait, it lacks the enlarged hexagonal scales along the spine."
//     },
//     "safety": {
//       "firstAid": "Clean the bite site with antiseptic. Though non-venomous, their teeth can cause small lacerations and secondary infection.",
//       "prevention": "Seal cracks in walls and keep homes free of geckos to reduce attraction. Always use a flashlight when walking at night."
//     },
//     "mapData": {
//       "activeHotspots": ["Maharashtra", "West Bengal", "Karnataka", "Tamil Nadu", "Uttar Pradesh"]
//     }
//   },

// }

// const DATA_TWO = SNAKES_DATA;



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
            <div><Modal snakeId="common-krait" ref={modalref} /></div>
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