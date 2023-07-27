import Link from "next/link";

const Header = () => (
  <div className=" bg-gray-900 w-full px-12 py-6 flex text-white justify-between">
    <Link href="/" className="p-1 border-white border-2">
      logo
    </Link>
    <div className="self-center">
      {[
        { title: "Installation", ref: "/install" },
        { title: "Documents", ref: "/docs" },
        { title: "Examples", ref: "/examples" },
        { title: "Github", ref: "github.com" },
      ].map(({ title, ref }, i) => (
        <Link href={ref} key={i} className="px-8">
          {title}
        </Link>
      ))}
    </div>
  </div>
);

export default Header;
