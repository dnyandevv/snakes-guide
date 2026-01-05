import SectionInfo from "../MAININFO/SectionsInformation";

export default function ComparisionMap({ snake_data_1, snake_data_2, commonName1, commonName2 }) {
    if (!snake_data_1 || !snake_data_2) return null;

    const sectionKeys = Object.keys(snake_data_1).filter(
        (key) => 
            typeof snake_data_1[key] === "object" && 
            !Array.isArray(snake_data_1[key]) && 
            key !== "mapData" && key !== "safety"
    );

    return (
        <div className="flex flex-col gap-8 mt-4">
            
            
            <div className="flex gap-4 sticky top-0 bg-[#f7f8f2] z-20 py-4 border-b border-gray-200">
                <div className="flex-1 text-center">
                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">
                        {commonName1 || "Species A"}
                    </h3>
                </div>
                <div className="flex-1 text-center">
                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">
                        {commonName2 || "Species B"}
                    </h3>
                </div>
            </div>

            {sectionKeys.map((key) => {
                const title = key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

                return (
                    <div key={key} className="flex flex-col">
                        
                        <div className="w-full flex items-center justify-center mb-4">
                            <div className="h-px bg-gray-300 flex-1"></div>
                            <h2 className="px-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                                {title}
                            </h2>
                            <div className="h-px bg-gray-300 flex-1"></div>
                        </div>

                        
                        <div className="flex gap-4">
                            <div className="bg-white rounded-3xl p-6 flex-1 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <SectionInfo
                                    title="" 
                                    description={snake_data_1[key]}
                                />
                            </div>
                            <div className="bg-white rounded-3xl p-6 flex-1 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <SectionInfo
                                    title="" 
                                    description={snake_data_2[key]}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}