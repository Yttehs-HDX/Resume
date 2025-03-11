import { View, StyleSheet } from "react-native";
import { Material3Theme } from "@pchmn/expo-material3-theme";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function Line({ theme, colorScheme }: Props) {
  const lineColor = theme[colorScheme].outline;
  return <View style={[styles.line, { backgroundColor: lineColor }]} />;
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "95%",
  },
});
