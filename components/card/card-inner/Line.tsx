import { View, StyleSheet, DimensionValue } from "react-native";
import { Material3Theme } from "@pchmn/expo-material3-theme";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
  width?: DimensionValue;
};

export default function Line({ theme, colorScheme, width }: Props) {
  const lineColor = theme[colorScheme].outline;

  return (
    <View style={styles.container}>
      <View style={[styles.line, { backgroundColor: lineColor, width }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    height: 1,
    width: "100%",
  },
});
