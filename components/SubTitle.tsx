import { Material3Theme } from "@pchmn/expo-material3-theme";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
  title: string;
};

export default function SubTitle({ theme, colorScheme, title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: theme[colorScheme].onPrimaryContainer }]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
