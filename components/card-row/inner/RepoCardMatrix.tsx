import { StyleSheet, FlatList, View, Dimensions } from "react-native";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import RepoCard from "@/components/card/RepoCard";
import getDeviceType from "@/utils/Device";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function RepoCardMatrix({ theme, colorScheme }: Props) {
  const gap = 16;
  const cardWidthMax = 300;

  return (
    <FlatList
      style={styles.container}
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
      renderItem={() => (
        <RepoCard
          theme={theme}
          colorScheme={colorScheme}
          title="Test"
          content="Test"
        />
      )}
      keyExtractor={(item) => item.toString()}
      numColumns={Math.floor(Dimensions.get("window").width / cardWidthMax)}
      columnWrapperStyle={{ gap, justifyContent: "flex-start" }}
      contentContainerStyle={{ gap, justifyContent: "flex-start" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
