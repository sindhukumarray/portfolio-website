export default function About() {
  return (
    <section
      id="about"
      className="
      py-24
      px-6
      bg-white
      dark:bg-slate-900
      text-black
      dark:text-white
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
      >
        {/* Left Side */}

        <div>
          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            mb-6
            "
          >
            About Me
          </h2>

          <p
            className="
            text-lg
            leading-9
            text-gray-600
            dark:text-gray-300
            "
          >
            I am Sindhu Kumar Ray, an MCA student at
            LNCT Bhopal and a MERN Stack Developer Intern.

            I enjoy building responsive web applications
            using React, Tailwind CSS, JavaScript,
            and MySQL.

            My goal is to become a professional Full
            Stack Developer and contribute to real-world
            software solutions.
          </p>
        </div>

        {/* Right Side */}

        <div
          className="
          bg-slate-100
          dark:bg-slate-800
          p-8
          rounded-2xl
          shadow-lg
          "
        >
          <h3
            className="
            text-2xl
            font-semibold
            mb-6
            "
          >
            Quick Info
          </h3>

          <div className="space-y-4">
            <p>🎓 MCA Student - LNCT Bhopal</p>
            <p>💻 MERN Stack Developer Intern</p>
            <p>🚀 Frontend & React Enthusiast</p>
            <p>📍 Bhopal, India</p>
            <p>🌱 Learning Full Stack Development</p>
          </div>
        </div>
      </div>
    </section>
  );
}