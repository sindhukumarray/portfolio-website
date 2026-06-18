import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="
      bg-blue-600
      text-white
      px-4
      py-2
      rounded-lg
      "
    >
      {dark ? "☀ " : "🌙"}
    </button>
  );
}