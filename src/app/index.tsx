import {
  animationMenuRoutes,
  menuRoutes,
  uiMenuRoutes,
} from "@/constants/Routes";
import MenuItem from "@/presentation/menu/Menuitem";
import ThemeView from "@/presentation/shared/ThemeView";
import type { PropsWithChildren } from "react";
import React from "react";
import { View } from "react-native";

interface indexProps extends PropsWithChildren {}

const index = ({}: indexProps): React.JSX.Element => {
  return (
    <ThemeView margin>
      {animationMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.name}
          icon={route.icon}
          title={route.title}
          name={route.name}
          isFirst={index == 0}
          isLast={animationMenuRoutes.length - 1 == index}
        />
      ))}
      <View className="my-5" />

      {uiMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.name}
          icon={route.icon}
          title={route.title}
          name={route.name}
          isFirst={index == 0}
          isLast={uiMenuRoutes.length - 1 == index}
        />
      ))}
      <View className="my-5" />
      {menuRoutes.map((route, index) => (
        <MenuItem
          key={route.name}
          icon={route.icon}
          title={route.title}
          name={route.name}
          isFirst={index == 0}
          isLast={menuRoutes.length - 1 == index}
        />
      ))}
    </ThemeView>
  );
};
export default index;
