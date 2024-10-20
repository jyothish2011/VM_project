import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 font-semibold text-[#000] sm:text-base rounded md:p-0 hover:text-gray-800"
    >
      {title}
    </Link>
  );
};

export default NavLink;
