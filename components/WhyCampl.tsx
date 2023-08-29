import whyCampleData from "../data/whyCampl.json";

const WhyCampl = () => (
  <div className=" bg-light_green py-16 md:px-48 xxl:px-80 text-gray">
    <h1 className="text-5xl">Why CaMPL ?</h1>
    <div className="flex justify-between pt-16">
      {whyCampleData.map((f, i) => (
        <div
          key={f.title}
          className={"text-center w-1/4 " + (i === 4 ? "pr-0" : "pr-16")}
        >
          <h2 className="text-xl font-bold">{f.title}</h2>
          <br />
          {f.desc || ""}
        </div>
      ))}
    </div>
  </div>
);

export default WhyCampl;
