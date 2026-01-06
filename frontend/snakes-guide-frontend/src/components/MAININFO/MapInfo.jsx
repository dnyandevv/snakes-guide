import SectionInfo from "./SectionsInformation";

export default function MapInfo({snake_data}) {
    if (!snake_data) {
        return null;
    }
    const SNAKE_DATA_SECTIONS = Object.keys(snake_data)
        .filter((key) => typeof snake_data[key] === "object" && !Array.isArray(snake_data[key]))
        .map((key) => ({
            key,
            // Fix: Added () around [A-Z] so $1 has a group to reference
            title: key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()),
            data: snake_data[key],
        }));
    return (
        <>
            <div className="max-w-3xl mx-auto p-4">
                {SNAKE_DATA_SECTIONS.map(({ key, title, data }) => (
                    <SectionInfo
                        key={key}
                        title={title}
                        description={data}
                    />
                ))}
    </div>
        </>
    )
}