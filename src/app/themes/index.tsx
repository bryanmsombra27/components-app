import { useThemeChangerContext } from "@/presentation/context/ThemeChangerContext";
import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemeSwitch from "@/presentation/shared/ThemeSwitch";
import ThemeView from "@/presentation/shared/ThemeView";
import { useState } from "react";
import { Text } from "react-native";

const ThemesScreen = () => {
  const { currentTheme, toggleTheme, isSystemTheme, setSystemTheme } =
    useThemeChangerContext();
  const [darkModeSettings, setDarkModeSettings] = useState<{
    darkMode: boolean;
    systemMode: boolean;
  }>({
    darkMode: currentTheme == "dark",
    systemMode: isSystemTheme,
  });

  const setDarkMode = (val: boolean) => {
    setDarkModeSettings({
      darkMode: val,
      systemMode: false,
    });
    // setColorScheme(val ? "dark" : "light");
    toggleTheme();
  };

  const setSystemMode = (val: boolean) => {
    if (val) {
      setSystemTheme();
    }
    setDarkModeSettings({
      systemMode: true,
      darkMode: val,
    });

    // setColorScheme("system");
  };

  return (
    <ThemeView margin>
      <ThemeCard className="mt-5">
        <ThemeSwitch
          text="Dark Mode"
          className="mb-5"
          onValueChange={setDarkMode}
          value={darkModeSettings.darkMode}
        />
        <ThemeSwitch
          text="System Mode"
          className="mb-5"
          onValueChange={setSystemMode}
          value={darkModeSettings.systemMode}
        />
      </ThemeCard>
      <Text>ThemesScreen</Text>
    </ThemeView>
  );
};
export default ThemesScreen;
