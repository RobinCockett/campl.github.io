const WhyCampl = () => (
  <div className="bg-gray-950 py-16 md:px-48 xxl:px-80 text-white">
    <h1 className="text-5xl">Why CaMPL ?</h1>
    <div className="flex justify-between pt-16">
      {[{title: "Concurrent Types", 
      desc: "CaMPL has typed communication along channels: these concurrent types are called protocols."}, 
      {title: "Protocol Declarations", desc: "Concurrent types are declared using the analogue of data declarations for the concurrent world."}, {title: "Deadlocks and Livelocks", desc: "Pure CaMPL is deadlock and livelock free and guaranties progress. Furthermore it has races which allow non-determinstic concurrent behaviour"}, {title: "Sequential Data", desc: "CaMPL has data and codata declarations."}].map((f, i) => (
        <div
          key={f.title}
          className={"text-center w-1/4 " + (i === 4 ? "pr-0" : "pr-16")}
        >
          <div className="border-4 border-white my-4 h-24"></div>
          {f.title}
          <br />
          {f.desc || ""}
        </div>
      ))}
    </div>
  </div>
);

export default WhyCampl;
