import { Material3Theme } from "@pchmn/expo-material3-theme";
import { Text, StyleSheet } from "react-native";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
  text: string;
};

export default function Title({ theme, colorScheme, text }: Props) {
  const textColor = theme[colorScheme].onSecondaryContainer;
  return <Text style={[styles.title, { color: textColor }]}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
