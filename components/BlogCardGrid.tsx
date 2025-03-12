import { StyleSheet, View } from "react-native";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import BlogCard from "@/components/card/BlogCard";
import { FlatGrid } from 'react-native-super-grid';
import { Blog } from "@/constants/Blog";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function BlogCardGrid({ theme, colorScheme }: Props) {
  return (
    <View style={styles.container}>
      <FlatGrid
        itemDimension={400}
        data={Blog.PassageList}
        renderItem={({ item: passage, index }) => (
          <BlogCard key={index} theme={theme} colorScheme={colorScheme}
            url={passage.Url}
            title={passage.Title}
            description={passage.Description}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
