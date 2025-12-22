import { Link, NavLink } from "react-router";

export default function UpperContent() {
    return (
        <div className="flex ">
            <div className="max-w-[35%] mx-20 md:-mt-32 ml-28 xl:-mt-52">
                <h1 
                className="text-2xl sm:text-4xl lg:text-3xl font-bold text-white/90 mb-4 leading-tight justify-center py-5 drop-shadow-md"
                >
                    Patterns Tell the Story. <br />
                    Read The Signs. Identify.
                    
                </h1>
                <p className="text-xl text-white/60 leading-relaxed drop-shadow-md "
                >
                    Not every snake you see is harmful some are shy,
                     some are curious, and all are fascinating in their own way.
                      <br />I&rsquo;ve always been captivated by these incredible creatures, their patterns, and their behaviors. This guide is my way of sharing that love and helping you identify them safely.

                </p>
                <button className="bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-6 shadow-lg transition-colors duration-300 drop-shadow-md"
                >
                    Explore Species
                </button>
            </div>
        </div>
    )
}