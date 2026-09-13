import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemeSwitch from "@/presentation/shared/ThemeSwitch";
import ThemeView from "@/presentation/shared/ThemeView";
import { useState } from "react";
import { Text } from "react-native";

const Switches = () => {
  const [motions, setMotions] = useState<{
    isActive: boolean;
    isHungry: boolean;
    isHappy: boolean;
  }>({
    isActive: false,
    isHappy: false,
    isHungry: false,
  });

  return (
    <ThemeView
      margin
      className="mt-2"
    >
      <Text>Switches</Text>

      <ThemeCard>
        <ThemeSwitch
          text="Activo"
          value={motions.isActive}
          onValueChange={(value) => {
            setMotions((state) => ({ ...state, isActive: value }));
          }}
          className="mb-2"
        />
      </ThemeCard>

      <ThemeCard>
        <ThemeSwitch
          text="Hambriento"
          value={motions.isHungry}
          onValueChange={(value) => {
            setMotions((state) => ({ ...state, isHungry: value }));
          }}
        />
      </ThemeCard>

      <ThemeCard>
        <ThemeSwitch
          text="Feliz"
          value={motions.isHappy}
          onValueChange={(value) => {
            setMotions((state) => ({ ...state, isHappy: value }));
          }}
        />
      </ThemeCard>
    </ThemeView>
  );
};
export default Switches;
