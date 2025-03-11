import { Material3Theme } from "@pchmn/expo-material3-theme";
import { Text, StyleSheet } from "react-native";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
  text: string;
  fontSize?: number;
  fontWeight?: "normal" | "bold";
};

export default function Content({ theme, colorScheme, text, fontSize, fontWeight }: Props) {
  const textColor = theme[colorScheme].onPrimaryContainer;
  return <Text style={[styles.content, { color: textColor, fontSize, fontWeight }]}>{text}</Text>;
}

const styles = StyleSheet.create({
  content: {
    fontSize: 16,
    lineHeight: 32,
  },
});
