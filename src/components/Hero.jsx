import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
return ( <section
   className="
   min-h-screen
   flex
   flex-col
   justify-center
   items-center
   text-center
   px-6
   bg-slate-100
   dark:bg-slate-900
   text-black
   dark:text-white
   "
 > <h1 className="text-6xl font-bold mb-4">
Sindhu Kumar Ray </h1>

  <p className="text-xl text-gray-600 dark:text-gray-300">
    MCA Student | MERN Stack Developer
  </p>

  <div className="flex gap-4 mt-6">

    <a
      href="https://github.com/sindhukumarray"
      target="_blank"
      rel="noreferrer"
      className="text-3xl hover:text-blue-600"
    >
      <FaGithub />
    </a>

    <a
      href="https://linkedin.com/in/sindhu-kumar-ray"
      target="_blank"
      rel="noreferrer"
      className="text-3xl hover:text-blue-600"
    >
      <FaLinkedin />
    </a>

  </div>

  <div className="flex gap-4 mt-6">

    <a
      href="#projects"
      className="
      bg-blue-600
      text-white
      px-6
      py-3
      rounded-lg
      "
    >
      View Projects
    </a>

    <a
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="
      border
      border-blue-600
      text-blue-600
      dark:text-white
      px-6
      py-3
      rounded-lg
      "
    >
      Download Resume
    </a>

  </div>

</section>
);
}
