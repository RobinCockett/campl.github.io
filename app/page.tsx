import Intro from "@/components/Intro";
import WhyCampl from "@/components/WhyCampl";
import ExamplesOfUsage from "@/components/ExamplesOfUsage";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <Intro />
      <WhyCampl />
      <div className="md:flex-row flex flex-col my-20 mx-auto items-center justify-center">
        <Link
          href={"./examples"}
          className="w-72 text-center rounded-full border-2 py-2 mr-4 flex justify-center my-3"
        >
          Examples of CaMPL Programs{" "}
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
    </main>
  );
}
