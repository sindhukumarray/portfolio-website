import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
return ( <nav
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
 > <div
     className="
     max-w-7xl
     mx-auto
     flex
     items-center
     justify-between
     px-6
     py-4
     "
   > <h1
       className="
       text-2xl
       font-bold
       text-blue-600
       "
     >
Sindhu Portfolio </h1>

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
        <a
          href="#about"
          className="
          hover:text-blue-600
          transition
          duration-300
          "
        >
          About
        </a>
      </li>

       <li>
        <a
          href="#Skills"
          className="
          hover:text-blue-600
          transition
          duration-300
          "
        >
          Skills
        </a>
      </li>


      <li>
        <a
          href="#projects"
          className="
          hover:text-blue-600
          transition
          duration-300
          "
        >
          Projects
        </a>
      </li>

      <li>
        <a
          href="#Experience"
          className="
          hover:text-blue-600
          transition
          duration-300
          "
        >
          Experience
        </a>
      </li>

      <li>
        <a
          href="#contact"
          className="
          hover:text-blue-600
          transition
          duration-300
          "
        >
          Contact
        </a>
      </li>

      <li>
        <ThemeToggle />
      </li>
    </ul>
  </div>
</nav>
);
}
