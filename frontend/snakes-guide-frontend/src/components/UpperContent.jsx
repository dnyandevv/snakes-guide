import { Link, useLocation } from "react-router";

export default function UpperContent() {
    
    const location = useLocation();

    return (
        <div className="flex gap-4 ">
            {location.pathname === "/" && 
            <div className="md:max-w-[35%] h-full md:mx-20 md:-mt-32 md:ml-28 xl:-mt-52">
                <div
                    className="transition-all duration-700 ease-out opacity-0 translate-y-4 animate-fadeIn"
                >
                        <h1 
                        className="text-xl pb-10 md:text-2xl lg:text-3xl font-bold text-white/90 mb-4 leading-tight justify-center py-5 drop-shadow-md"
                        >
                            Patterns Tell the Story. <br />
                            Read The Signs. Identify.
                            
                        </h1>
                        <p className="md:text-lg text-white/60 leading-relaxed drop-shadow-md "
                        >
                            Not every snake you see is harmful some are shy,
                            some are curious, and all are fascinating in their own way.
                            <br />I&rsquo;ve always been captivated by these incredible creatures, their patterns, and their behaviors. This guide is my way of sharing that love and helping you identify them safely.

                        </p>
                        <Link to="/snakes-info" 
                        className=" inline-block text-center bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-6 shadow-lg transition-colors duration-300 drop-shadow-md"
                        >
                            Explore More Species
                        </Link>
                </div>
            </div>}


            {location.pathname === "/snakes-info" && 
                <div className="md:max-w-[35%] h-full md:mx-20 md:-mt-32 md:ml-28 xl:-mt-52">
                    <div
                        className="transition-all duration-700 ease-out opacity-0 translate-y-4 animate-fadeIn"
                    ><h1 
                    className="text-xl pb-10 md:text-2xl lg:text-3xl font-bold text-white/90 mb-4 leading-tight justify-center py-5 drop-shadow-md"
                    >
                        Snakes Are Not Villains.<br />
                        They Are Survivors.      
                    </h1>
                    <p className="md:text-lg text-white/60 leading-relaxed drop-shadow-md"
                    >
                        Snakes have existed for over 100 million years, surviving ice ages, mass extinctions, and changing continents.  
                        <br />Some can sense heat, some glide through the air, and others play dead to escape danger.
                    </p></div>
                </div>
            }
        </div>
    )
}