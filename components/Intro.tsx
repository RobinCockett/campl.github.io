import Link from "next/link";
import Image from "next/image";

const Intro = () => (
  <div>
    <div className="flex mx-auto mt-32 my-16 md:px-48 xxl:px-80">
      <div className="pr-20 w-1/2">
        <div className="flex mb-4">
          <Image
            alt="campl-logo"
            src="/LOGO223.png"
            width={100}
            height={100}
            className=" inline"
          />
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

      <Image
        src={"/code-2.png"}
        alt="campl-helloworld"
        className="pl-8"
        width={600}
        height={250}
      />
    </div>
  </div>
);

export default Intro;
