import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

interface ThemeCardProps extends ViewProps {
  className?: string;
}

const Styles = StyleSheet.create({});

const ThemeCard = ({
  className,
  children,
  ...props
}: ThemeCardProps): React.JSX.Element => {
  return (
    <View
      className={`bg-white dark:bg-black/10 rounded-xl p-2 shadow shadow-black/5 ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};
export default ThemeCard;
