export default function Footer() {
return ( <footer
   className="
   bg-slate-900
   dark:bg-black
   text-white
   py-8
   text-center
   "
 > <h3
     className="
     text-xl
     font-bold
     "
   >
Sindhu Kumar Ray </h3>
  <p
    className="
    text-gray-400
    mt-2
    "
  >
    MERN Stack Developer Portfolio
  </p>

  <p
    className="
    text-sm
    text-gray-500
    mt-4
    "
  >
    © {new Date().getFullYear()} All Rights Reserved
  </p>
</footer>
);
}
