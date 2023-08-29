import Image from "next/image";
import Link from "next/link";
import examplesData from "../data/Examples.json";

const ExamplesOfUsage = () => (
  <div className="py-16 md:px-48 xxl:px-80">
    <h1 className="text-5xl">Examples</h1>
    <div className="flex justify-center pt-16 mx-16">
      {examplesData.slice(0, 2).map(({ title, image, desc, href }, i) => (
        <Link
          key={title}
          href={href}
          className={
            "text-center w-1/2 border-2 border-light_green rounded-lg hover:shadow-2xl cursor-pointer p-4 " +
            (i === 4 ? "mr-0" : "mr-16")
          }
        >
          <div className="relative h-96 mb-4">
            <Image alt="example" fill src={"./" + image} />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{desc}</p>
          <div className="bg-green text-white block mx-auto rounded-lg px-16 py-2 mt-4">
            Read More ...{" "}
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default ExamplesOfUsage;
