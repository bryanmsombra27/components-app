import { useTheme } from "@/hooks/use-theme";
import FadeInImages from "@/presentation/images/FadeInImages";
import ThemeView from "@/presentation/shared/ThemeView";
import { useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    // <Image
    //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
    //   style={{ height: 400, width: "100%" }}
    // />
    <FadeInImages
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: "100%",
      }}
    />
  );
};

const InfiniteScrollScreen = () => {
  const [number, setNumber] = useState<number[]>([0, 1, 2, 3, 4, 5, 6]);
  const { primary } = useTheme();

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, index) => number.length + 1);

    setTimeout(() => {
      setNumber((prevState) => [...prevState, ...newArray]);
    }, 300);
  };

  return (
    <ThemeView>
      <FlatList
        data={number}
        renderItem={({ index, item }) => <ListItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: "center",
            }}
          >
            <ActivityIndicator
              size={40}
              color={primary}
            />
          </View>
        )}
      />

      <Text>InfiniteScrollScreen</Text>
    </ThemeView>
  );
};
export default InfiniteScrollScreen;
