export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-blue-600">
          Sindhu Portfolio
        </h1>

        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>

      </div>
<button
  onClick={() =>
    document.documentElement.classList.toggle("dark")
  }
>
  🌙
</button>

    </nav>
  );
}