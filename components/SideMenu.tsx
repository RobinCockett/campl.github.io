import Link from "next/link";

const SideMenu = () => (
  <div className="h-screen bg-gray-700 w-1/4 flex-col px-12 py-6 text-white">
    {[
      { title: "Topic 1", ref: "/docs" },
      { title: "Topic 2", ref: "/docs" },
      { title: "Topic 3", ref: "/docs" },
      { title: "Topic 4", ref: "/docs" },
      { title: "Topic 5", ref: "/docs" },
      { title: "Topic 6", ref: "/docs" },
    ].map(({ title, ref }, i) => (
      <Link href={ref} key={i} className="py-4 block">
        {title}
      </Link>
    ))}
  </div>
);

export default SideMenu;
