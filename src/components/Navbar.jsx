import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
      fixed
      top-0
      w-full
      bg-white
      dark:bg-slate-950
      text-black
      dark:text-white
      shadow-md
      z-50
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        items-center
        justify-between
        px-6
        py-4
        "
      >
        {/* Logo */}
        <h1
          className="
          text-2xl
          font-bold
          text-blue-600
          "
        >
          Sindhu Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul
          className="
          hidden
          md:flex
          items-center
          gap-6
          font-medium
          "
        >
          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#Skills" className="hover:text-blue-600 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#Experience" className="hover:text-blue-600 transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>

          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Right Side */}
        <div className="md:hidden flex items-center gap-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
          md:hidden
          flex
          flex-col
          gap-5
          px-6
          py-6
          bg-white
          dark:bg-slate-950
          shadow-md
          "
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#Skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#Experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}