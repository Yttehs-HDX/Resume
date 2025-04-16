import { Material3Theme } from "@pchmn/expo-material3-theme";
import { Text, StyleSheet, Pressable } from "react-native";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
  text: string;
  fontSize?: number;
  fontWeight?: "normal" | "bold";
  onClick: () => void;
};

export default function ClickableContent({ theme, colorScheme, text, fontSize, fontWeight, onClick }: Props) {
  const textColor = theme[colorScheme].onSecondaryContainer;
  return (
    <Pressable onPress={onClick} accessibilityRole="link">
      <Text style={[styles.content, { color: textColor, fontSize, fontWeight }]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 16,
    lineHeight: 32,
  },
});
