import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-slate-100">

      <h1 className="text-6xl font-bold mb-4">
        Sindhu Kumar Ray
      </h1>

      <p className="text-xl text-gray-600">
        MCA Student | MERN Stack Developer
      </p>

      <div className="flex gap-4 mt-6">

        <a
          href="https://github.com/sindhukumarray"
          target="_blank"
          className="text-3xl hover:text-blue-600"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/sindhu-kumar-ray"
          target="_blank"
          className="text-3xl hover:text-blue-600"
        >
          <FaLinkedin />
        </a>

      </div>

    </section>
  );
}