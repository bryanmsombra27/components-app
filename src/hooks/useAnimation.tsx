import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({
    duration = 300,
    toValue = 1,
    useNativeDriver = true,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
  };

  const fadeOut = ({
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
  };

  const startMovingTopPosition = ({
    toValue = 0,
    duration = 700,
    useNativeDriver = true,
    easing = Easing.bounce,
    initialValue = -100,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialValue);

    Animated.timing(animatedTop, {
      toValue,
      duration,
      useNativeDriver,
      // easing: Easing.elastic(3),
      easing,
    }).start(callback);
  };

  return {
    animatedTop,
    animatedOpacity,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
