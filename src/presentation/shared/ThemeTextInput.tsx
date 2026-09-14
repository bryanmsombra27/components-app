import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface ThemeTextInputProps extends TextInputProps {
  className?: string;
}

const Styles = StyleSheet.create({});

const ThemeTextInput = ({
  className,
  ...props
}: ThemeTextInputProps): React.JSX.Element => {
  return (
    <TextInput
      className={`px-2 py-4 text-black dark:text-white  ${className}`}
      placeholderTextColor="grey"
      {...props}
    />
  );
};
export default ThemeTextInput;
