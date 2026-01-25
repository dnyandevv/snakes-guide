import SectionInfo from "../MAININFO/SectionsInformation";

export default function ComparisonMap({ snake_data_1, snake_data_2, commonName1, commonName2 }) {
    if (!snake_data_1 || !snake_data_2) return null;

    const sectionKeys = Object.keys(snake_data_1).filter(
        (key) => 
            typeof snake_data_1[key] === "object" && 
            !Array.isArray(snake_data_1[key]) && 
            key === 'identification'
    );

    
    return (
        <div className="flex flex-col gap-6 p-2">
            <div className="flex gap-4 sticky top-0 bg-[#f7f8f2]/95 backdrop-blur-sm z-20 py-4 border-b-2 border-green-900/10">
                <div className="flex-1 text-center">
                    <h3 className="text-2xl font-serif font-black text-[#05422c] uppercase tracking-wide">
                        {commonName1 || "Species A"}
                    </h3>
                </div>
                <div className="flex-1 text-center">
                    <h3 className="text-2xl font-serif font-black text-[#05422c] uppercase tracking-wide">
                        {commonName2 || "Species B"}
                    </h3>
                </div>
            </div>

            {sectionKeys.map((key) => {
                const title = key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

                return (
                    <div key={key} className="flex flex-col">
                        <div className="w-full flex items-center justify-center my-6">
                            <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1"></div>
                            <h2 className="px-6 text-xs font-bold text-gray-500 uppercase tracking-[0.3em] bg-[#f7f8f2]">
                                {title}
                            </h2>
                            <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1"></div>
                        </div>

                        <div className="flex gap-6">
                            {[snake_data_1[key], snake_data_2[key]].map((data, idx) => (
                                <div key={idx} className="flex-1 bg-[#ffffff] rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-green-900/5 relative overflow-hidden group hover:border-green-600/30 transition-all duration-300">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-green-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    
                                    <SectionInfo
                                        title="" 
                                        description={data}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}