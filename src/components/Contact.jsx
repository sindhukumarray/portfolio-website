import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
FaGithub,
FaLinkedin,
FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
const form = useRef();

const sendEmail = (e) => {
e.preventDefault();
emailjs
  .sendForm(
    "service_w8ty3ng",
    "template_ltc6x6t",
    form.current,
    "BpkzoJ7ojj5BM4qiz"
  )
  .then(
    () => {
      alert("Message Sent Successfully ✅");
      form.current.reset();
    },
    (error) => {
      alert("Failed ❌");
      console.log(error);
    }
  );

};

return ( <section
   id="contact"
   className="
   py-20
   px-6
   bg-slate-100
   dark:bg-slate-950
   text-black
   dark:text-white
   "
 > <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-center mb-6">
      Contact Me
    </h2>

    <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
      Feel free to reach out for collaboration, projects, or opportunities.
    </p>

    <div className="grid md:grid-cols-2 gap-12">

      {/* Left Side */}

      <div>

        <h3 className="text-3xl font-bold mb-8">
          Contact Information
        </h3>

        <div className="space-y-6">

          <a
            href="mailto:sindhukumarray007@gmail.com"
            className="
            flex
            items-center
            gap-4
            hover:text-blue-600
            dark:hover:text-blue-400
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
            gap-4
            hover:text-blue-600
            dark:hover:text-blue-400
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
            gap-4
            hover:text-blue-600
            dark:hover:text-blue-400
            transition
            "
          >
            <FaLinkedin />
            linkedin.com/in/sindhu-kumar-ray
          </a>

        </div>

      </div>

      {/* Right Side */}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-5"
      >

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="
          w-full
          p-4
          rounded-lg
          bg-white
          dark:bg-slate-800
          border
          border-gray-300
          dark:border-slate-700
          text-black
          dark:text-white
          "
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="
          w-full
          p-4
          rounded-lg
          bg-white
          dark:bg-slate-800
          border
          border-gray-300
          dark:border-slate-700
          text-black
          dark:text-white
          "
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Your Message"
          required
          className="
          w-full
          p-4
          rounded-lg
          bg-white
          dark:bg-slate-800
          border
          border-gray-300
          dark:border-slate-700
          text-black
          dark:text-white
          "
        />

        <button
          type="submit"
          className="
          w-full
          bg-blue-600
          text-white
          py-4
          rounded-lg
          font-bold
          hover:bg-blue-700
          transition-all
          duration-300
          "
        >
          Send Message
        </button>

      </form>

    </div>

  </div>
</section>
);
}
