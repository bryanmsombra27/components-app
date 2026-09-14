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

const ModalWindow = ({}: ModalWindowProps): React.JSX.Element => {
  return (
    <ThemeView
      className="justify-center items-center flex-1 "
      bgColor="#a52182"
    >
      <ThemeText> hola soy un modal </ThemeText>

      <ThemeButton onPress={() => router.dismiss()}>regresar</ThemeButton>

      <ThemeButton
        onPress={() => router.push("/modal/ModalWindow-2")}
        className="my-4"
      >
        Abrir modal anidado (modal que se abre en otro modal)
      </ThemeButton>

      <StatusBar style={Platform.OS == "ios" ? "light" : "auto"} />
    </ThemeView>
  );
};
export default ModalWindow;
