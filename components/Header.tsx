const Header = () => (
  <div className=" bg-gray-900 w-full py-8 flex text-white justify-end">
    {["Install", "Documents", "Blog", "Github"].map((section, i) => (
      <a key={i} className="px-8">{section}</a>
    ))}
  </div>
);

export default Header;
