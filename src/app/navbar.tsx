import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav className="flex bg-gray-800 py-2 justify-between text-white">
      <div className="flex items-center gap-4 justify-between">
        <h1>Navbar</h1>
        <ul className="flex gap-4">
          <Link href="/">
            <li
              className={`cursor-pointer ${
                pathname === "/" ? "text-blue-500" : "text-white"
              } mr-3`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`cursor-pointer ${
                pathname === "/about" ? "text-blue-500" : "text-white"
              }`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`cursor-pointer ${
                pathname === "/about/profile" ? "text-blue-500" : "text-white"
              }`}
            >
              Profile
            </li>
          </Link>
        </ul>
      </div>
      <button
        className={"bg-red-500 p-2 text-white rounded-md"}
        onClick={() => router.push("/login")}
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;
