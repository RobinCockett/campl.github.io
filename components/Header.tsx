import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <div className="bg-white shadow-md fixed top-0 w-full px-32 py-2 flex text-white justify-between">
    <Link href="/">
      <Image alt="campl-logo" src="/LOGO-final.png" width={50} height={50} />
    </Link>
    <div className="self-center text-jet ">
      {[
        { title: "Installation", ref: "/install" },
        { title: "Documentations", ref: "/docs" },
        { title: "Examples", ref: "/examples" },
        {
          title: "Github",
          ref: "https://github.com/campl-ucalgary/campl",
          external: true,
        },
      ].map(({ title, ref, external }, i) =>
        external ? (
          <a key={i} href={ref} className="px-8 hover:text-green">
            {title}
          </a>
        ) : (
          <Link href={ref} key={i} className="px-8 hover:text-green">
            {title}
          </Link>
        )
      )}
    </div>
  </div>
);

export default Header;
