import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  return (
    <section
      className="
      min-h-[85vh]
      flex
      items-center
      justify-center
      px-6
      pt-24
      bg-slate-100
      dark:bg-slate-900
      text-black
      dark:text-white
      "
    >
      <div
        className="
        max-w-4xl
        mx-auto
        text-center
        "
      >
        {/* Profile Image */}

        <img
          src={profileImg}
          alt="Sindhu Kumar Ray"
          className="
          w-40
          h-40
          md:w-48
          md:h-48
          rounded-full
          object-cover
          border-4
          border-blue-600
          shadow-xl
          mx-auto
          mb-6
          "
        />

        {/* Badge */}

        <span
          className="
          inline-block
          px-4
          py-2
          mb-6
          rounded-full
          bg-blue-100
          text-blue-600
          dark:bg-blue-900
          dark:text-blue-300
          font-medium
          "
        >
          👋 Welcome To My Portfolio
        </span>

        {/* Name */}

        <h1
          className="
          text-4xl
          md:text-6xl
          font-bold
          mb-4
          "
        >
          Sindhu Kumar Ray
        </h1>

        {/* Role */}

       <p className="text-lg text-gray-500 dark:text-gray-400 mb-2">
  MCA Student
</p>

<TypeAnimation
  sequence={[
    "MERN Stack Developer",
    2000,
    "React Developer",
    2000,
    "Frontend Developer",
    2000,
    "JavaScript Developer",
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="
  text-2xl
  md:text-3xl
  font-semibold
  text-blue-600
  dark:text-cyan-400
  "
/>

        {/* Description */}

        <p
          className="
          max-w-2xl
          mx-auto
          mt-6
          text-gray-500
          dark:text-gray-400
          leading-8
          "
        >
          Passionate about building responsive web applications using
          React, Tailwind CSS, JavaScript, Node.js and MySQL.
          Currently learning Full Stack Development and creating
          real-world projects.
        </p>

        {/* Social Icons */}

        <div className="flex justify-center gap-5 mt-8">
          <a
            href="https://github.com/sindhukumarray"
            target="_blank"
            rel="noreferrer"
            className="
            w-14
            h-14
            rounded-full
            bg-white
            dark:bg-slate-800
            shadow-md
            flex
            items-center
            justify-center
            text-2xl
            hover:text-blue-600
            hover:-translate-y-1
            transition-all
            duration-300
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/sindhu-kumar-ray"
            target="_blank"
            rel="noreferrer"
            className="
            w-14
            h-14
            rounded-full
            bg-white
            dark:bg-slate-800
            shadow-md
            flex
            items-center
            justify-center
            text-2xl
            hover:text-blue-600
            hover:-translate-y-1
            transition-all
            duration-300
            "
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-25  mt-8">
          <a
            href="#projects"
            className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-lg
            hover:bg-blue-700
            transition
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
            hover:bg-blue-600
            hover:text-white
            transition
            "
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}