import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemeText from "@/presentation/shared/ThemeText";
import ThemeView from "@/presentation/shared/ThemeView";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import ThemeTextInput from "../../presentation/shared/ThemeTextInput";
const isIOS = Platform.OS == "ios";

const TextInputsScreen = () => {
  const [form, setForm] = useState<{
    name: string;
    email: string;
    phone: string;
  }>({
    email: "",
    name: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView behavior={isIOS ? "height" : undefined}>
      <ScrollView>
        <ThemeView>
          <ThemeCard className="mb-5">
            <ThemeTextInput
              placeholder="Nombre completo..."
              autoCapitalize="words"
              autoCorrect={false}
              value={form.name}
              onChangeText={(val) =>
                setForm((state) => ({ ...state, name: val }))
              }
            />
            <ThemeTextInput
              placeholder="correo electronico..."
              autoCorrect={false}
              value={form.email}
              keyboardType="email-address"
              onChangeText={(val) =>
                setForm((state) => ({ ...state, email: val }))
              }
            />
            <ThemeTextInput
              placeholder="Telefono..."
              autoCorrect={false}
              value={form.phone}
              keyboardType="phone-pad"
              onChangeText={(val) =>
                setForm((state) => ({ ...state, phone: val }))
              }
            />
          </ThemeCard>

          <ThemeCard className="my-5">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>
          <ThemeCard className="my-5">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>
          <ThemeCard className="my-5">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>
          <ThemeCard className="my-5">
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard
            style={{
              marginBottom: isIOS ? 100 : 10,
            }}
          >
            <ThemeTextInput
              placeholder="Telefono..."
              autoCorrect={false}
              value={form.phone}
              keyboardType="phone-pad"
              onChangeText={(val) =>
                setForm((state) => ({ ...state, phone: val }))
              }
            />
          </ThemeCard>
        </ThemeView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
