import { type Theme } from "@/types/Theme";
import { useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, handleToggleTheme };
};

export default useTheme;
