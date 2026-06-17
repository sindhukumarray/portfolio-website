import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
    id="Skills"
      className="
      py-20
      px-6
      bg-slate-100
      dark:bg-slate-950
      text-black
      dark:text-white
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
          My Skills
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {skills.map((category) => (
            <div
              key={category.category}
              className="
              bg-white
              dark:bg-slate-800
              p-6
              rounded-xl
              shadow-lg
              "
            >
              <h3
                className="
                text-2xl
                font-bold
                text-blue-600
                mb-6
                "
              >
                {category.category}
              </h3>

              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  className="mb-5"
                >
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div
                    className="
                    w-full
                    bg-gray-200
                    dark:bg-slate-700
                    rounded-full
                    h-3
                    "
                  >
                    <div
                      className="
                      bg-gradient-to-r
                      from-blue-500
                      to-indigo-600
                      h-3
                      rounded-full
                      "
                      style={{
                        width: `${skill.level}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
