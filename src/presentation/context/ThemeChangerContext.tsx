import AsyncStorage from "@react-native-async-storage/async-storage";
import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import { useColorScheme } from "nativewind";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface ThemeChangerContext {
  currentTheme: "light" | "dark";
  isSystemTheme: boolean;
  toggleTheme: () => void;
  setSystemTheme: () => void;
}
interface ThemeChangerContextProvider {
  children: ReactNode;
}
const ThemeChangerContext = createContext<ThemeChangerContext | null>(null);

export const ThemeChangerContextProvider = ({
  children,
}: ThemeChangerContextProvider) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [isDarkMode, setIsDarkMode] = useState<boolean>(colorScheme == "dark");
  const [isSystemThemeEnabled, setIsSystemThemeEnabled] =
    useState<boolean>(true);
  const currentTheme = isSystemThemeEnabled
    ? colorScheme
    : isDarkMode
      ? "dark"
      : "light";

  useEffect(() => {
    AsyncStorage.getItem("selected-theme").then((theme) => {
      if (!theme) return;

      setIsDarkMode(theme == "dark");
      setIsSystemThemeEnabled(theme == "system");
      setColorScheme(theme as "light" | "dark" | "system");
    });
  }, []);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemeChangerContext.Provider
        value={{
          currentTheme: currentTheme ?? "light",
          isSystemTheme: false,
          toggleTheme: async () => {
            setIsDarkMode((state) => !state);
            setColorScheme(isDarkMode ? "light" : "dark");
            setIsSystemThemeEnabled(false);

            await AsyncStorage.setItem(
              "selected-theme",
              isDarkMode ? "light" : "dark",
            );
          },
          setSystemTheme: async () => {
            setIsSystemThemeEnabled(true);
            setColorScheme("system");
            await AsyncStorage.setItem("selected-theme", "system");
          },
        }}
      >
        {children}
      </ThemeChangerContext.Provider>
    </ThemeProvider>
  );
};
export const useThemeChangerContext = () => {
  const context = useContext(ThemeChangerContext);

  if (context === null) {
    throw new Error("context was used outside of the provider");
  }

  return context;
};
