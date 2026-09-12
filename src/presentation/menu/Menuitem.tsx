import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import type { PropsWithChildren } from "react";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import ThemeText from "../shared/ThemeText";

interface MenuItemProps extends PropsWithChildren {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const Styles = StyleSheet.create({});

const MenuItem = ({
  icon,
  name,
  title,
  isFirst = false,
  isLast = false,
}: MenuItemProps): React.JSX.Element => {
  const [route_name] = name.split("/");
  const { primary, text } = useTheme();

  return (
    <Pressable
      onPress={() => router.push(route_name as Href)}
      className="bg-white dark:bg-black/15 px-5 py-2"
      style={{
        ...(isFirst && {
          borderTopLeftRadius: 10,
          borderTopRightRadiusRadius: 10,
          paddingTop: 10,
        }),
        ...(isLast && {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingBottom: 10,
        }),
      }}
    >
      <View className="flex-row items-center flex w-full flex-">
        <Ionicons
          name={icon}
          size={30}
          color={primary}
          className="mr-5"
        />
        <ThemeText
          type="h2"
          style={{
            color: text,
          }}
        >
          {title}{" "}
        </ThemeText>
      </View>
    </Pressable>
  );
};
export default MenuItem;
