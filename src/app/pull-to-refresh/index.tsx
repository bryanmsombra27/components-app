import { useTheme } from "@/hooks/use-theme";
import ThemeText from "@/presentation/shared/ThemeText";
import ThemeView from "@/presentation/shared/ThemeView";
import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const { primary } = useTheme();

  const Onrefresh = async () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={Onrefresh}
          colors={[primary, "red", "orange", "green"]}
        />
      }
    >
      <ThemeView margin>
        <ThemeText className="text-white">PullToRefreshScreen</ThemeText>
      </ThemeView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
