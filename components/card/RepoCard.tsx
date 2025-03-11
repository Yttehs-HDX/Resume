import { Material3Theme } from "@pchmn/expo-material3-theme";
import { View, StyleSheet } from "react-native";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
  title: React.ReactNode;
  content: React.ReactNode;
};

export default function RepoCard({ theme, colorScheme, title, content }: Props) {
  const backgroundColor = theme[colorScheme].primaryContainer;

  return (
    <View style={styles.container}>
      <View style={[styles.titleBackground, { backgroundColor }]}>
        {title}
      </View>
      <View style={[styles.contentBackground, { backgroundColor }]}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleBackground: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 16,
    padding: 16,
  },
  contentBackground: {
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    gap: 16,
    padding: 16,
  },
});
