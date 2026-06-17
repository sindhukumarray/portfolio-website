import { skills } from "../data/skills";

export default function Skills() {
return ( <section
   className="
   py-20
   px-6
   bg-slate-100
   dark:bg-slate-950
   text-black
   dark:text-white
   "
 > <div className="max-w-5xl mx-auto">

    <h2
      className="
      text-4xl
      font-bold
      text-center
      mb-10
      text-gray-800
      dark:text-white
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
          shadow-md
          hover:shadow-xl
          hover:-translate-y-1
          transition-all
          duration-300
          cursor-pointer
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
