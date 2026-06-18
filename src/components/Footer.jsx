import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
      bg-white
      dark:bg-slate-950
      text-black
      dark:text-white
      py-4
      border-t
      border-gray-300
      dark:border-slate-800
      transition-all
      duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-center items-center gap-5 text-xl">

          <a
            href="https://github.com/sindhukumarray"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/sindhu-kumar-ray"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

        </div>

        <p className="text-center text-gray-500 dark:text-gray-400 text-xs mt-3">
          © 2026 Sindhu Kumar Ray. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}