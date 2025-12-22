export default function SnakeCard({name, scientificName, image, type}) {
    return (
        <>
            <div className="max-w-xs flex flex-col justify-between bg-gray-200 relative rounded-[1rem]">
                <div className="p-4  group">
                    <div className="w-full aspect-square overflow-hidden bg-gray-200 rounded-[1rem]">
                        <img src={image}
                            alt={name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white
                        ${type === 'Venomous' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'}
                    `}> 
                        {type}
                    </span>
                </div>
                <div className="pl-2 m-2 mb-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{name}</h3>
                    <p className="text-sm italic text-gray-500 font-medium">{scientificName}</p>
                </div>
            </div>
        </>
    )
}