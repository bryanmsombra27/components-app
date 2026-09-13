import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import ThemeText from "./ThemeText";

interface ThemeButtonProps extends PressableProps {
  className?: string;
  children: string;
}

const Styles = StyleSheet.create({});

const ThemeButton = ({
  className,
  children,
  ...props
}: ThemeButtonProps): React.JSX.Element => {
  return (
    <Pressable
      {...props}
      className={`bg-ligth-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80  ${className}`}
    >
      <ThemeText type="normal">{children} </ThemeText>
    </Pressable>
  );
};
export default ThemeButton;
