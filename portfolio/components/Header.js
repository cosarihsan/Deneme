import React from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex items-center justify-between text-white px-4 py-2 h-12  max-w-5xl mx-auto mt-16 bg-transparent">
      <span></span>
      <button
        className="px-4 py-1 bg-pink-400 text-white rounded-md font-semibold uppercase"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
};

export default Header;