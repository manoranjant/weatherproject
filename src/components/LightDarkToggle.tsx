import Sun from "/src/assets/sun-svgrepo-com.svg?react";
import Moon from "/src/assets/moon-svgrepo-com.svg?react";
import { Switch } from "./ui/switch";
import { useTheme } from "./ThemeProvider";

const LightDarkToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex items-center gap-2">
      <Sun className="size-5 " />
      <Switch checked={theme == "dark"} onCheckedChange={toggleTheme} />
      <Moon className="size-5 " />
    </div>
  );
};

export default LightDarkToggle;
