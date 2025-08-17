// import React, { useLayoutEffect, useState } from "react";

// export default function ThemeToggle() {
//   const [isDark, setIsDark] = useState(false);

//   useLayoutEffect(() => {
//     const saved = localStorage.getItem("theme");
//     const prefersDark =
//       saved === "dark" ||
//       (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
//     setIsDark(prefersDark);
//     document.documentElement.classList.toggle("dark", prefersDark);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = isDark ? "light" : "dark";
//     setIsDark(!isDark);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded shadow hover:opacity-80 transition"
//     >
//       {isDark ? "☀️ Light" : "🌙 Dark"}
//     </button>
//   );
// }
