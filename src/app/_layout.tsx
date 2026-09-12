import { useTheme } from "@/hooks/use-theme";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../../global.css";

// SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { background } = useTheme();

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: background }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: background,
            },
            headerStyle: {
              backgroundColor: background,
            },
          }}
        >
          {/* {allRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{ title: route.title }}
            />
          ))} */}
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
