import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <div className="bg-white shadow-md fixed top-0 w-full lg:px-32 md:px-20 px-10 py-2 flex text-white justify-between z-10">
    <Link href="/" className="relative h-16 w-12">
      <Image alt="campl-logo" src="/LOGO-final.png" fill />
    </Link>
    <div className="self-center text-jet ">
      {[
        { title: "Installation", ref: "/install" },
        { title: "Documents", ref: "/docs" },
        { title: "Examples", ref: "/examples" },
        {
          title: "Github",
          ref: "https://github.com/campl-ucalgary/campl",
          external: true,
        },
      ].map(({ title, ref, external }, i) =>
        external ? (
          <a key={i} href={ref} className="md:px-8 px-4 hover:text-green">
            {title}
          </a>
        ) : (
          <Link href={ref} key={i} className="md:px-8 px-4 hover:text-green">
            {title}
          </Link>
        )
      )}
    </div>
  </div>
);

export default Header;
