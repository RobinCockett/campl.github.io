import SideMenu from "@/components/SideMenu";
import { FaFile } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <div className="flex mt-32 lg:px-48 h-screen md:px-32 sm:px-20 px-10 xxl:px-80">
        <div className="pt-8">
          <h1 className="text-5xl">Documents</h1>
          <ul className="mt-16">
            <li className="flex mt-2">
              <FaFile className=" self-center mr-2 text-green" />
              <a
                target="_blank"
                href="https://github.com/campl-ucalgary/campl/blob/main/resources/502.02A_interim_pon.pdf"
              >
                Implementation Status of CaMPL (by Jared Pon)
              </a>
            </li>
            <li className="flex mt-2">
              <FaFile className=" self-center mr-2 text-green" />
              <a
                target="_blank"
                href="https://pages.cpsc.ucalgary.ca/~robin/Theses/PrashantKumar.pdf"
              >
                Implementing Message Passing Language (by Prashant Kumar)
              </a>
            </li>
            <li className="flex mt-2">
              <FaFile className=" self-center mr-2 text-green" />
              <a
                target="_blank"
                href="https://github.com/campl-ucalgary/campl/blob/main/resources/ProgressForMPL.pdf"
              >
                Progress For The Message Passing Logic (by Reginald Lybbert)
              </a>
            </li>
            <li className="flex mt-2">
              <FaFile className=" self-center mr-2 text-green" />
              <a target="_blank" href="https://arxiv.org/pdf/math/0703713.pdf">
                The Logic of Message Passing (by Robin Cockett and Craig Pastro)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
