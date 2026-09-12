import { useTheme } from "@/hooks/use-theme";
import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ThemeViewProps extends ViewProps {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: string;
}

const Styles = StyleSheet.create({});

const ThemeView = ({
  className,
  margin = false,
  safe = false,
  bgColor,
  children,
  ...props
}: ThemeViewProps): React.JSX.Element => {
  const { background } = useTheme();
  const backgroundColor = bgColor ?? background;
  const { top } = useSafeAreaInsets();

  return (
    <View
      className={className}
      style={{
        backgroundColor,
        flex: 1,
        paddingTop: safe ? top : 0,
        marginHorizontal: margin ? 10 : 0,
      }}
      {...props}
    >
      {children}
    </View>
  );
};
export default ThemeView;
