import { useTheme } from "@/hooks/use-theme";
import type { PropsWithChildren } from "react";
import React from "react";
import { Platform, Pressable, StyleSheet, Switch, View } from "react-native";
import ThemeText from "./ThemeText";

interface ThemeSwitchProps extends PropsWithChildren {
  text?: string;
  className?: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const Styles = StyleSheet.create({});

const isAndroid = Platform.OS == "android";

const ThemeSwitch = ({
  onValueChange,
  value,
  text,
  className,
}: ThemeSwitchProps): React.JSX.Element => {
  const { primary } = useTheme();

  return (
    <Pressable
      onPress={() => onValueChange(!value)}
      className={`flex flex-row mx-2 items-center justify-between active:opacity-80  ${className}`}
    >
      {text ? <ThemeText type="h2">{text} </ThemeText> : <View />}

      <Switch
        trackColor={{ false: "grey", true: primary }}
        thumbColor={isAndroid ? primary : ""}
        // ios_backgroundColor={value ? "green" : "red"}
        onValueChange={onValueChange}
        value={value}
      />
    </Pressable>
  );
};
export default ThemeSwitch;
