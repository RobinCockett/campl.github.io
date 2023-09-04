import Link from "next/link";
import examplesData from "../../data/Examples.json";

export default function Home() {
  return (
    <main>
      <div className="h-screen my-32 lg:px-48 md:px-32 sm:px-20 px-10 xxl:px-80">
        <h1 className="mb-4">Examples</h1>
        <div className="grid grid-cols-2 justify-start">
          {examplesData.map(({ title, desc, href }, i) => (
            <Link
              key={i}
              href={href}
              className="mr-4 mt-4 bg-light_green rounded-lg p-16 hover:shadow-md"
            >
              <h2>{title}</h2>
              <p>{desc}</p>
            </Link>
          ))}
          <a
            href={"https://github.com/campl-ucalgary/campl/tree/main/MPLCLI/examples"}
            className="mr-4 mt-4 bg-light_green rounded-lg p-16 hover:shadow-md"
          >
            <h2>More Examples On Github</h2>
            <p>{}</p>
          </a>
        </div>
      </div>
    </main>
  );
}
