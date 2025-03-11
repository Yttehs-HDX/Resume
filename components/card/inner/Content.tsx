import { Material3Theme } from "@pchmn/expo-material3-theme";
import { Text, StyleSheet } from "react-native";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
  text: string;
};

export default function Content({ theme, colorScheme, text }: Props) {
  const textColor = theme[colorScheme].onPrimaryContainer;
  return <Text style={[styles.content, { color: textColor }]}>{text}</Text>;
}

const styles = StyleSheet.create({
  content: {
    fontSize: 16,
    lineHeight: 32,
  },
});
