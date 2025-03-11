import Card from "@/components/card/Card";
import Content from "@/components/card/inner/Content";
import Title from "@/components/card/inner/Title";
import { Education } from "@/constants/Education";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { FontAwesome6 } from "@expo/vector-icons";
import { View, StyleSheet, Image, AppState } from "react-native";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function EducationCard({ theme, colorScheme }: Props) {
  return (
    <Card
      theme={theme}
      colorScheme={colorScheme}
      title={
        <>
          <FontAwesome6 name="graduation-cap" size={24} color={theme[colorScheme].onPrimaryContainer} />
          <Title theme={theme} colorScheme={colorScheme} text={Education.Title} />
        </>
      }
      content={
        <View style={styles.row}>
          <View style={styles.university}>
            <View style={styles.subRow}>
              <Image source={{ uri: Education.NEU.Avatar.UrL }} style={styles.image} resizeMode="contain" />
              <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Name} fontWeight="bold" fontSize={20} />
            </View>
            <View style={styles.subRow}>
              <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Major} fontSize={18} />
              <Content theme={theme} colorScheme={colorScheme} text={`${Education.NEU.Background} ${Education.NEU.Duration}`} fontSize={18} />
            </View>
          </View>
          <View style={styles.class}>
            <View style={styles.subColumn}>
              <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Courses.Title} fontWeight="bold" fontSize={18} />
              <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Courses.Content} />
              <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Clubs.Title} fontWeight="bold" fontSize={18} />
              <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Clubs.Content} />
              <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Labs.Title} fontWeight="bold" fontSize={18} />
              <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Labs.Content} />
            </View>
          </View>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  university: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  class: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  subRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  subColumn: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 50,
  },
});
