import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink =
    "transition duration-300 hover:text-black";

  const activeLink =
    "text-black border-b-2 border-black pb-1";

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          to="/"
          className="font-serif text-3xl font-semibold"
        >
          A4AC
        </Link>

        <ul className="hidden items-center gap-10 uppercase tracking-wider lg:flex">

          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? activeLink : navLink
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeLink : navLink
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? activeLink : navLink
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? activeLink : navLink
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeLink : navLink
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>

        <Link
          to="/contact"
          className="hidden rounded-full bg-black px-6 py-3 text-white transition hover:bg-neutral-800 lg:block"
        >
          Get In Touch
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl lg:hidden"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

      </div>

      {menuOpen && (
        <div className="border-t bg-white lg:hidden">

          <div className="flex flex-col p-6 text-lg">

            <NavLink to="/" onClick={() => setMenuOpen(false)} className="py-3">
              Home
            </NavLink>

            <NavLink to="/about" onClick={() => setMenuOpen(false)} className="py-3">
              About
            </NavLink>

            <NavLink to="/projects" onClick={() => setMenuOpen(false)} className="py-3">
              Projects
            </NavLink>

            <NavLink to="/services" onClick={() => setMenuOpen(false)} className="py-3">
              Services
            </NavLink>

            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="py-3">
              Contact
            </NavLink>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;
