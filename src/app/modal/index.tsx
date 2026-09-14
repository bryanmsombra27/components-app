import ThemeButton from "@/presentation/shared/ThemeButton";
import ThemeView from "@/presentation/shared/ThemeView";
import { Link, router } from "expo-router";
import { Text } from "react-native";

const ModalScreen = () => {
  return (
    <ThemeView>
      <Link
        href={"/modal/ModalWindow"}
        asChild
        className="mx-4"
      >
        <Text className="text-ligth-text dark:text-dark-text my-5">
          ver modal
        </Text>
      </Link>
      <Text>ModalScreen</Text>

      <ThemeButton
        onPress={() => router.push("/modal/ModalWindow")}
        className="mx-4"
      >
        Ver Modal
      </ThemeButton>
    </ThemeView>
  );
};
export default ModalScreen;
