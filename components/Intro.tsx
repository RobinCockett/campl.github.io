import Link from "next/link";

const Intro = () => (
  <div>
    <div className="flex mx-auto my-16 md:px-48 xxl:px-80">
      <div className="pr-16 w-1/2">
        <h1 className="text-8xl">CaMPL</h1>
        <p className="text-2xl mb-16">
          The <span className="font-bold">Ca</span>tegorical <span className="font-bold">M</span>essage <span className="font-bold">P</span>assing 
            <span className="font-bold"> L</span>anguage is a typed functional-style concurrent language in which processes communicate by sending messages on channels.<br /><br />
          The Semantics of CaMPL is based on the categorical theory of message passing.
        </p>
        <Link
          href="/install"
          className="px-24 py-4 border-4 rounded-lg border-gray-900 font-bold"
        >
          Get Started
        </Link>
      </div>
      <code className="flex-1 pr-16 bg-black text-white p-8">
        campl sample code
        <br />
        campl sample code campl sample code <br /> campl sample codecampl sample
        code
      </code>
    </div>
  </div>
);

export default Intro;
