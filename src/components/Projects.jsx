import { projects } from "../data/projects";

export default function Projects() {
return ( <section
   id="projects"
   className="
   py-20
   px-6
   bg-slate-50
   dark:bg-slate-950
   text-black
   dark:text-white
   "
 > <div className="max-w-6xl mx-auto">

    <h2
      className="
      text-4xl
      font-bold
      text-center
      mb-12
      text-gray-800
      dark:text-white
      "
    >
      My Projects
    </h2>

    <div
      className="
      grid
      sm:grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-8
      "
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className="
          bg-white
          dark:bg-slate-800
          rounded-xl
          shadow-md
          overflow-hidden
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
          "
        >
          <img
            src={project.image}
            alt={project.title}
            className="
            w-full
            h-48
            object-cover
            "
          />

          <div className="p-6">

            <h3
              className="
              text-xl
              font-bold
              text-blue-600
              mb-3
              "
            >
              {project.title}
            </h3>

            <p
              className="
              text-gray-600
              dark:text-gray-300
              mb-5
              "
            >
              {project.description}
            </p>

            <div className="flex gap-3">

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
                bg-blue-600
                text-white
                px-4
                py-2
                rounded-lg
                hover:bg-blue-700
                transition
                "
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                border
                border-blue-600
                text-blue-600
                dark:text-blue-400
                px-4
                py-2
                rounded-lg
                hover:bg-blue-50
                dark:hover:bg-slate-700
                transition
                "
              >
                GitHub
              </a>

            </div>

          </div>

        </div>
      ))}
    </div>

  </div>
</section>
);
}
