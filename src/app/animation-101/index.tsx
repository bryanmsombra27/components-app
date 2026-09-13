import { useAnimation } from "@/hooks/useAnimation";
import ThemeButton from "@/presentation/shared/ThemeButton";
import ThemeView from "@/presentation/shared/ThemeView";
import { Animated, Text } from "react-native";

const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <ThemeView
      margin
      className="justify-center items-center flex-1 gap-5"
    >
      <Text>Animation101Screen</Text>

      <Animated.View
        className="bg-ligth-secondary dark:bg-dark-secondary rounded-xl "
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }],
        }}
      />

      <ThemeButton
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({});
        }}
      >
        Fade In
      </ThemeButton>
      <ThemeButton onPress={() => fadeOut({})}>Fade Out</ThemeButton>
    </ThemeView>
  );
};
export default Animation101Screen;
