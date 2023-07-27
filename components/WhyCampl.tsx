const WhyCampl = () => (
  <div className="bg-gray-950 py-16 md:px-48 xxl:px-80 text-white">
    <h1 className="text-5xl">Why CaMPL ?</h1>
    <div className="flex justify-between pt-16">
      {["feature 1", "feature 2", "feature 3", "feature 4"].map((f, i) => (
        <div
          key={f}
          className={"text-center w-1/4 " + (i === 4 ? "pr-0" : "pr-16")}
        >
          <div className="border-4 border-white my-4 h-24"></div>
          {f}
          <br />
          some explanation about this feature bla bla bla
        </div>
      ))}
    </div>
  </div>
);

export default WhyCampl;
