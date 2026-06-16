import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      className="
      py-20
      px-6
      bg-slate-100
      "
    >
      <div className="max-w-5xl mx-auto">

        <h2
          className="
          text-4xl
          font-bold
          text-center
          mb-10
          "
        >
          My Skills
        </h2>

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-4
          "
        >
          {skills.map((skill) => (
            <div
              key={skill}
              className="
              bg-gradient-to-r
from-blue-600
to-indigo-600
              text-white
              px-5
              py-3
              rounded-lg
              shadow
              "
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}