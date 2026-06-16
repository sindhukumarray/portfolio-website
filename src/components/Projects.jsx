import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
      py-20
      px-6
      bg-slate-50
      "
    >
      <div className="max-w-6xl mx-auto">

        <h2
          className="
          text-4xl
          font-bold
          text-center
          mb-12
          "
        >
          My Projects
        </h2>

        <div
          className="
          grid
          grid-cols-1
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
              p-6
              rounded-xl
              shadow-md
              hover:shadow-xl
              transition
              "
            >
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
                mb-4
                "
              >
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                inline-block
                bg-blue-600
                text-white
                px-4
                py-2
                rounded-lg
                hover:bg-blue-700
                "
              >
                View Project
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}