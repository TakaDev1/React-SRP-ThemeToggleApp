import useTheme from "@/hooks/useTheme";
import React from "react";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const { theme, handleToggleTheme } = useTheme();
  return (
    <div>
      <p className="text-white">CurrentTheme: {theme}</p>
      <Button onClick={handleToggleTheme}>ChangeTheme</Button>
    </div>
  );
};

export default ThemeToggle;
