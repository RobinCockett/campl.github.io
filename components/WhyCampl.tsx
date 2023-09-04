import Link from "next/link";
import whyCampleData from "../data/whyCampl.json";
import { FaArrowRightLong } from "react-icons/fa6";

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
    <div className="flex mt-20 justify-center">
      <Link
        href={"./examples"}
        className="w-72 text-center rounded-full border-2 py-2 mr-4 flex justify-center"
      >
        Example CaMPL Programs{" "}
        <FaArrowRightLong className="self-center mt-1 ml-2" />
      </Link>
      <Link
        href={"./docs"}
        className="w-72 text-center rounded-full border-2 py-2 mr-4 flex justify-center"
      >
        Read Documents
        <FaArrowRightLong className="self-center mt-1 ml-2" />
      </Link>
    </div>
  </div>
);

export default WhyCampl;
