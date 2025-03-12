import { StyleSheet, View, Text } from "react-native";
import { Material3Theme } from "@pchmn/expo-material3-theme";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function RepoCardMatrix({ theme, colorScheme }: Props) {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
