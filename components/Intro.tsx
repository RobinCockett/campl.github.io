import Link from "next/link";
import Image from "next/image";

const Intro = () => (
  <div>
    <div className="md:flex-row flex flex-col justify-between mx-auto mt-32 my-16 lg:px-48 md:px-32 sm:px-20 px-10 xxl:px-80">
      <div className="md:w-1/2">
        <div className="flex mb-4">
          <div className="relative w-24 h-32">
            <Image
              alt="campl-logo"
              src="/LOGO-final.png"
              fill
              className=" inline"
            />
          </div>
          <h1 className="text-8xl text-green self-end">aMPL</h1>
        </div>
        <p className="text-2xl mb-16">
          The <span className="font-bold text-olive_green">Ca</span>tegorical{" "}
          <span className="font-bold text-olive_green">M</span>essage{" "}
          <span className="font-bold text-olive_green">P</span>assing
          <span className="font-bold text-olive_green"> L</span>anguage is a
          typed functional-style concurrent language in which processes
          communicate by passing messages on channels.
          <br />
          <br />
          The Semantics of CaMPL is based on the categorical theory of message
          passing.
        </p>
        <Link
          href="/install"
          className="bg-green px-24 py-4 rounded-lg text-white font-bold shadow-md"
        >
          Get Started
        </Link>
      </div>

      <div className="relative text-center md:mt-0 mt-10 self-center h-128 w-full md:w-2/5">
        <Image src={"/code-2.png"} alt="campl-helloworld" fill />
      </div>
    </div>
  </div>
);

export default Intro;
