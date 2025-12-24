export default function SectionInfo({ title, description}) {
    return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>

      {Object.entries(description).map(([key, value]) => (
        <div key={key} className="mb-2">
          <span className="font-medium capitalize">
            {key.replace(/([A-Z])/g, " $1")}:
          </span>{" "}

          {Array.isArray(value) ? (
            <ul className="list-disc ml-6">
              {value.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <span>{value}</span>
          )}
        </div>
      ))}
    </section>
  );
}