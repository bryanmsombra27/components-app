import ThemeButton from "@/presentation/shared/ThemeButton";
import ThemeText from "@/presentation/shared/ThemeText";
import ThemeView from "@/presentation/shared/ThemeView";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from "react-native";

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    img: require("../../../assets/images/slide-1.png"),
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    img: require("../../../assets/images/slide-2.png"),
  },
  {
    title: "Titulo 3",
    desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    img: require("../../../assets/images/slide-3.png"),
  },
];

const SlidesScreen = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isScrollEnabled, setisScrollEnabled] = useState<boolean>(false);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isScrollEnabled) return;

    const { contentOffset, layoutMeasurement } = e.nativeEvent;

    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
    if (currentIndex == items.length - 1) {
      setisScrollEnabled(true);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <ThemeView>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <SliteItem item={item} />}
        horizontal
        pagingEnabled
        scrollEnabled={isScrollEnabled}
        onScroll={onScroll}
      />

      {currentSlideIndex == items.length - 1 ? (
        <ThemeButton
          className="absolute bottom-10 right-5 w-[150px]"
          onPress={() => router.dismiss()}
        >
          Finalizar
        </ThemeButton>
      ) : (
        <ThemeButton
          className="absolute bottom-10 right-5 w-[150px]"
          onPress={() => scrollToSlide(currentSlideIndex + 1)}
        >
          Siguiente
        </ThemeButton>
      )}
    </ThemeView>
  );
};
export default SlidesScreen;

interface SlideItemProps {
  item: Slide;
}

const SliteItem = ({ item }: SlideItemProps) => {
  const { width } = useWindowDimensions();
  const { desc, img, title } = item;
  return (
    <ThemeView
      className="flex-1 rounded p-10 justify-center bg-red-500"
      style={{ width }}
    >
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: "center",
          alignSelf: "center",
        }}
      />
      <ThemeText
        type="h1"
        className="text-ligth-primary dark:text-dark-primary"
      >
        {title}
      </ThemeText>

      <ThemeText className="mt-10"> {desc}</ThemeText>
    </ThemeView>
  );
};
