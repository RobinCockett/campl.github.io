import Link from "next/link";
import whyCampleData from "../data/whyCampl.json";
import { FaArrowRightLong } from "react-icons/fa6";

const WhyCampl = () => (
  <div className=" bg-light_green py-20 lg:px-48 md:px-32 sm:px-20 px-10 xxl:px-80 text-gray">
    <h1 className="text-5xl">Why CaMPL ?</h1>
    <div className="md:flex grid grid-cols-2 md:justify-between pt-16">
      {whyCampleData.map((f, i) => (
        <div
          key={f.title}
          className={"text-center md:mt-0 mt-6 mb-2 md:w-1/4 md:" + (i === 4 ? "pr-0" : "pr-16")}
        >
          <h2 className="text-xl font-bold">{f.title}</h2>
          {f.desc || ""}
        </div>
      ))}
    </div>
  </div>
);

export default WhyCampl;
