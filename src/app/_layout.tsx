import { useTheme } from "@/hooks/use-theme";
import { ThemeChangerContextProvider } from "@/presentation/context/ThemeChangerContext";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../../global.css";

// SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const { background } = useTheme();

  return (
    <ThemeChangerContextProvider>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: background }}>
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
      </GestureHandlerRootView>
    </ThemeChangerContextProvider>
  );
}
