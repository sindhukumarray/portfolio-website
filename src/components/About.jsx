export default function About() {
return ( <section
   id="about"
   className="
   py-20
   px-6
   bg-white
   dark:bg-slate-900
   text-black
   dark:text-white
   "
 > <div
     className="
     max-w-5xl
     mx-auto
     grid
     md:grid-cols-2
     gap-10
     items-center
     "
   >
{/* Left Side */}

    <div>
      <h2
        className="
        text-4xl
        font-bold
        mb-6
        text-gray-800
        dark:text-white
        "
      >
        About Me
      </h2>

      <p
        className="
        text-gray-600
        dark:text-gray-300
        leading-8
        "
      >
        I am Sindhu Kumar Ray, an MCA student
        at LNCT Bhopal and a MERN Stack
        Developer Intern.

        I enjoy building responsive web
        applications using React, Tailwind CSS,
        JavaScript, Node.js and MySQL.

        My goal is to become a professional
        Full Stack Developer and contribute to
        real-world software solutions.
      </p>
    </div>

    {/* Right Side */}

    <div
      className="
      bg-blue-50
      dark:bg-slate-800
      p-8
      rounded-xl
      shadow-md
      "
    >
      <h3
        className="
        text-2xl
        font-semibold
        mb-4
        text-gray-900
        dark:text-white
        "
      >
        Skills
      </h3>

      <div
        className="
        flex
        flex-wrap
        gap-3
        "
      >
        <span className="bg-blue-500 text-white px-4 py-2 rounded">
          React
        </span>

        <span className="bg-blue-500 text-white px-4 py-2 rounded">
          JavaScript
        </span>

        <span className="bg-blue-500 text-white px-4 py-2 rounded">
          Tailwind CSS
        </span>

        <span className="bg-blue-500 text-white px-4 py-2 rounded">
          MySQL
        </span>

        <span className="bg-blue-500 text-white px-4 py-2 rounded">
          GitHub
        </span>
      </div>
    </div>

  </div>
</section>
);
}
