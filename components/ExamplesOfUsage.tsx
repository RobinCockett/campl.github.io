const ExamplesOfUsage = () => (
  <div className="py-16 px-80">
    <h1 className="text-5xl">Examples</h1>
    <div className="flex justify-between pt-16">
      {["Usage 1", "Usage 2"].map((f, i) => (
        <div
          key={f}
          className={
            "text-center w-1/2 border-2 border-gray-50 rounded-lg hover:shadow-2xl cursor-pointer p-4 " +
            (i === 4 ? "mr-0" : "mr-16")
          }
        >
          <div className="bg-black text-white text-left p-8 shadow-sm">
            <code>
              sample code sample code sample code sample code sample code sample
              code sample code sample codesample code sample code sample code
              sample codesample code sample code sample code sample code
            </code>
          </div>
          <div className="border-4 border-white my-4"></div>
          {f}
          <br />
          some explanation about this feature bla bla bla
          <button className="border-2 border-gray-800 block mx-auto rounded-lg px-16 py-2 my-8 ">
            read more ...{" "}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default ExamplesOfUsage;
