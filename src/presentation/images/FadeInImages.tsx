import { useAnimation } from "@/hooks/useAnimation";
import type { PropsWithChildren } from "react";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from "react-native";

interface FadeInImagesProps extends PropsWithChildren {
  uri: string;
  style: StyleProp<ImageStyle>;
}

const FadeInImages = ({ uri, style }: FadeInImagesProps): React.JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { animatedOpacity, fadeIn } = useAnimation();

  return (
    <View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      {isLoading && (
        <ActivityIndicator
          style={{
            position: "absolute",
          }}
          color={"grey"}
          size={30}
        />
      )}
      <Animated.Image
        source={{ uri }}
        style={[
          style,
          {
            opacity: animatedOpacity,
          },
        ]}
        onLoadEnd={() => {
          fadeIn({});
          setIsLoading(false);
        }}
      />
    </View>
  );
};
export default FadeInImages;
