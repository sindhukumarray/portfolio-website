export default function Footer() {
  return (
    <footer
      className="
      bg-slate-900
      text-white
      py-6
      text-center
      "
    >
      <p>
        © {new Date().getFullYear()} Sindhu Kumar Ray
      </p>

      <p className="text-sm text-gray-400 mt-2">
        MERN Stack Developer Portfolio
      </p>
    </footer>
  );
}