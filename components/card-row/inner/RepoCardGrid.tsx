import { StyleSheet, View } from "react-native";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import RepoCard from "@/components/card/RepoCard";
import { FlatGrid } from 'react-native-super-grid';

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function RepoCardGrid({ theme, colorScheme }: Props) {
  return (
    <View style={styles.container}>
      <FlatGrid
        itemDimension={300}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
        renderItem={({ item }) => (
          <RepoCard theme={theme} colorScheme={colorScheme} title={item} content={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
    gap: 16,
  },
});
