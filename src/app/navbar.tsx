import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex bg-gray-800 py-2 justify-between text-white">
      <h1>Navbar</h1>
      <ul className="flex gap-4">
        <Link href="/">
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link href="/about">
          <li className="cursor-pointer">About</li>
        </Link>
        <Link href="/about/profile">
          <li className="cursor-pointer">Profile</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
