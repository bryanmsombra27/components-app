import { Stack } from "expo-router";
import type { PropsWithChildren } from "react";
import React from "react";

interface ModallayoutProps extends PropsWithChildren {}

const ModalLayout = ({}: ModallayoutProps): React.JSX.Element => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="ModalWindow"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="ModalWindow-2"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
};
export default ModalLayout;
