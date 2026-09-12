import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

type TextType = "normal" | "h1" | "h2" | "semi-bold" | "link";

interface ThemeTextProps extends TextProps {
  className?: string;
  type?: TextType;
}

const Styles = StyleSheet.create({});

const ThemeText = ({
  className,
  type,
  children,
  ...props
}: ThemeTextProps): React.JSX.Element => {
  const normal = type == "normal" ? "font-normal" : undefined;
  const h1 = type == "h1" ? "text-3xl" : undefined;
  const h2 = type == "h2" ? "text-xl" : undefined;
  const fontBold = type == "semi-bold" ? "font-semibold" : undefined;
  const link = type == "link" ? "font-normal underline" : undefined;
  return (
    <Text
      className={[normal, h1, h2, fontBold, link, className].join(" ")}
      {...props}
    >
      {children}
    </Text>
  );
};
export default ThemeText;
