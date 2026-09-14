import ThemeButton from "@/presentation/shared/ThemeButton";
import ThemeText from "@/presentation/shared/ThemeText";
import ThemeView from "@/presentation/shared/ThemeView";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import type { PropsWithChildren } from "react";
import React from "react";
import { Platform, StyleSheet } from "react-native";
interface ModalWindowProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const ModalWindow2 = ({}: ModalWindowProps): React.JSX.Element => {
  return (
    <ThemeView
      className="justify-center items-center flex-1 "
      bgColor="#a52182"
    >
      <ThemeText> hola soy un modal Anidado</ThemeText>

      <ThemeButton onPress={() => router.dismiss()}>regresar</ThemeButton>

      <StatusBar style={Platform.OS == "ios" ? "light" : "auto"} />
    </ThemeView>
  );
};
export default ModalWindow2;
