import { Material3Theme } from "@pchmn/expo-material3-theme";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Content from "./card-inner/Content";
import Title from "./card-inner/Title";
import { Entypo } from "@expo/vector-icons";
import { openUrl } from "@/utils/UrlUtil";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
  url: string;
  title: string;
  description: string;
  date: string;
};

export default function BlogCard({ theme, colorScheme, url, title, description, date }: Props) {
  const backgroundColor = theme[colorScheme].secondaryContainer;

  return (
    <TouchableOpacity
      style={styles.container}
      accessibilityRole="link"
      onPress={() => openUrl(url, true)}
    >
      <View style={[styles.titleBackground, { backgroundColor }]}>
        <Entypo name="pencil" size={24} color={theme[colorScheme].onPrimaryContainer} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Title theme={theme} colorScheme={colorScheme} text={title} />
        </ScrollView>
      </View>
      <View style={[styles.contentBackground, { backgroundColor }]}>
        <Content theme={theme} colorScheme={colorScheme} text={description} />
        <View style={styles.row}>
          <View style={styles.spacer} />
          <Content theme={theme} colorScheme={colorScheme} text={date} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
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
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  contentBackground: {
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    gap: 16,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  spacer: {
    flex: 1,
  },
});
