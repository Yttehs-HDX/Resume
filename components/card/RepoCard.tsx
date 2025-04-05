import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Title from "./card-inner/Title";
import Capsule from "./repo-card-inner/WarnCapsule";
import Content from "./card-inner/Content";
import { openUrl } from "@/utils/UrlUtil";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
  url: string;
  fullname: string;
  description: string;
  stars: number;
  forks: number;
  watchers: number;
  language?: string;
  languageColor?: string;
  detailedDescription?: string;
  archived: boolean;
};

export default function RepoCard({ theme, colorScheme, url, fullname, description, stars, forks, watchers, language, languageColor, detailedDescription, archived }: Props) {
  const backgroundColor = theme[colorScheme].inversePrimary;

  return (
    <TouchableOpacity style={styles.container} onPress={() => openUrl(url, true)}>
      <View style={[styles.titleBackground, { backgroundColor }]}>
        <Octicons name="repo" size={24} color={theme[colorScheme].onPrimaryContainer} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Title theme={theme} colorScheme={colorScheme} text={fullname} />
        </ScrollView>
        <View style={styles.spacer} />
        {archived && (
          <Capsule theme={theme} colorScheme={colorScheme} text="Archived" />
        )}
      </View>
      <View style={[styles.contentBackground, { backgroundColor }]}>
        <View style={styles.column}>
          <View style={styles.subColumn}>
            <Content theme={theme} colorScheme={colorScheme} text={description} />
            <View style={styles.row}>
              <View style={styles.subRow}>
                <MaterialIcons name="star" size={16} color={theme[colorScheme].onPrimaryContainer} />
                <Content theme={theme} colorScheme={colorScheme} text={stars.toString()} />
              </View>
              <View style={styles.subRow}>
                <Octicons name="repo-forked" size={16} color={theme[colorScheme].onPrimaryContainer} />
                <Content theme={theme} colorScheme={colorScheme} text={forks.toString()} />
              </View>
              <View style={styles.subRow}>
                <Octicons name="eye" size={16} color={theme[colorScheme].onPrimaryContainer} />
                <Content theme={theme} colorScheme={colorScheme} text={watchers.toString()} />
              </View>
              <View style={styles.spacer} />
              {language && (
                <View style={styles.subRow}>
                  {languageColor && (
                    <View style={[styles.languageColor, { backgroundColor: languageColor }]} />
                  )}
                  <Content theme={theme} colorScheme={colorScheme} text={language} />
                </View>
              )}
              <View style={styles.spacer} />
            </View>
          </View>
          <View style={styles.subColumn}>
            {detailedDescription && (
              <Content theme={theme} colorScheme={colorScheme} text={detailedDescription} />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
  spacer: {
    flex: 1,
  },
  column: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
  },
  subColumn: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 8,
  },
  subRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  languageColor: {
    width: 16,
    height: 16,
    borderRadius: 90,
  },
});
