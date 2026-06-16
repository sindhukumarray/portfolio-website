export default function Hero() {
  return (
    <section
      className="
      h-screen
      flex
      flex-col
      justify-center
      items-center
      text-center
      px-4
      bg-slate-100
      "
    >
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Sindhu Kumar Ray
      </h1>

      <p className="text-gray-600 max-w-xl">
        MCA Student | MERN Stack Developer | Frontend Enthusiast
      </p>

      <div className="flex gap-4 mt-6">

  <a
    href="#projects"
    className="
    bg-blue-600
    text-white
    px-6
    py-3
    rounded-lg
    hover:bg-blue-700
    "
  >
    View Projects
  </a>

  <a
    href="/resume.pdf"
    className="
    border
    border-blue-600
    text-blue-600
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