import {
FaGithub,
FaLinkedin,
FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
return ( <section
   id="contact"
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
     max-w-4xl
     mx-auto
     text-center
     "
   > <h2
       className="
       text-4xl
       font-bold
       mb-6
       "
     >
Contact Me </h2>
    <p
      className="
      text-gray-600
      dark:text-gray-300
      mb-8
      "
    >
      Interested in working together or discussing
      a project? Feel free to reach out.
    </p>

    <div
      className="
      flex
      flex-col
      gap-5
      items-center
      "
    >
     
     <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=sindhukumarray007@gmail.com"
      target="_blank"
      rel="noreferrer"
      className="
       flex
       items-center
       gap-3
       hover:text-blue-600
       transition
       "
     >
   <FaEnvelope />
      sindhukumarray007@gmail.com
   </a>

      <a
        href="https://github.com/sindhukumarray"
        target="_blank"
        rel="noreferrer"
        className="
        flex
        items-center
        gap-3
        hover:text-blue-600
        transition
        "
      >
        <FaGithub />
        github.com/sindhukumarray
      </a>

      <a
        href="https://linkedin.com/in/sindhu-kumar-ray"
        target="_blank"
        rel="noreferrer"
        className="
        flex
        items-center
        gap-3
        hover:text-blue-600
        transition
        "
      >
        <FaLinkedin />
        linkedin.com/in/sindhu-kumar-ray
      </a>
    </div>
  </div>
</section>
);
}
