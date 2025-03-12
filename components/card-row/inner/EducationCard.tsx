import Card from "@/components/card/Card";
import Content from "@/components/card/card-inner/Content";
import Title from "@/components/card/card-inner/Title";
import { Education } from "@/constants/Education";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { FontAwesome6 } from "@expo/vector-icons";
import { View, StyleSheet, Image, AppState, ScrollView } from "react-native";
import getDeviceType from "@/utils/Device";

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
        <ScrollView horizontal style={styles.scrollView}>
          <View style={[styles.container, {
            flexDirection: getDeviceType() === "mobile" ? "column" : "row",
          }]}>
            {getDeviceType() !== "mobile" && <View style={styles.spacer} />}
            <Image source={{ uri: Education.NEU.Avatar.UrL }} style={styles.image} resizeMode="contain" />
            {getDeviceType() !== "mobile" && <View style={styles.spacer} />}
            <View style={[styles.university, { width: getDeviceType() === "mobile" ? "100%" : undefined }]}>
              <View style={styles.subColumn}>
                <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Name} fontWeight="bold" fontSize={20} />
                <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Major} fontSize={18} />
                <Content theme={theme} colorScheme={colorScheme} text={`${Education.NEU.Background} ${Education.NEU.Duration}`} fontSize={18} />
              </View>
            </View>
            {getDeviceType() !== "mobile" && <View style={styles.spacer} />}
            <View style={[styles.class, { width: getDeviceType() === "mobile" ? "100%" : undefined }]}>
              <View style={styles.subColumn}>
                <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Courses.Title} fontWeight="bold" fontSize={18} />
                <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Courses.Content} />
                <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Clubs.Title} fontWeight="bold" fontSize={18} />
                <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Clubs.Content} />
                <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Labs.Title} fontWeight="bold" fontSize={18} />
                <Content theme={theme} colorScheme={colorScheme} text={Education.NEU.Labs.Content} />
              </View>
            </View>
            {getDeviceType() !== "mobile" && <View style={styles.spacer} />}
          </View>
        </ScrollView>
      }
    />
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
  },
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  spacer: {
    flex: 1,
  },
  university: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  class: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  subColumn: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 100,
  },
});
