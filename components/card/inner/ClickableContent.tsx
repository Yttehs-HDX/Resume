import { Material3Theme } from "@pchmn/expo-material3-theme";
import { Text, StyleSheet, Pressable } from "react-native";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
  text: string;
  onClick: () => void;
};

export default function ClickableContent({ theme, colorScheme, text, onClick }: Props) {
  const textColor = theme[colorScheme].onPrimaryContainer;
  return (
    <Pressable onPress={onClick}>
      <Text style={[styles.content, { color: textColor }]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 16,
    lineHeight: 32,
  },
});
