import Card from "@/components/card/Card";
import Content from "@/components/card/inner/Content";
import Title from "@/components/card/inner/Title";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { ClubExperience } from "@/constants/ClubExperience";
import { View, StyleSheet, Image } from "react-native";
import getDeviceType from "@/utils/Device";
import Line from "@/components/card/inner/Line";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function ClubExperienceCard({ theme, colorScheme }: Props) {
  return (
    <Card
      theme={theme}
      colorScheme={colorScheme}
      title={
        <>
          <MaterialIcons name="group" size={24} color={theme[colorScheme].onPrimaryContainer} />
          <Title theme={theme} colorScheme={colorScheme} text={ClubExperience.Title} />
        </>
      }
      content={
        <View style={styles.container}>
          {ClubExperience.ClubList.map((club, index) => (
            <View key={index} style={styles.column}>
              { index !== 0 && <Line theme={theme} colorScheme={colorScheme} /> }
              <View style={[styles.row, {
                flexDirection: getDeviceType() === "mobile" ? "column" : "row",
              }]}>
                {getDeviceType() !== "mobile" && <View style={styles.spacer} />}
                <View style={[styles.club, { width: getDeviceType() === "mobile" ? "100%" : undefined }]}>
                  <View style={styles.subColumn}>
                    <Content theme={theme} colorScheme={colorScheme} text={`${club.Name} - ${club.Job}`} fontWeight="bold" fontSize={18} />
                    <Content theme={theme} colorScheme={colorScheme} text={club.Duration} fontSize={18} />
                  </View>
                </View>
                {getDeviceType() !== "mobile" && <View style={styles.spacer} />}
                <View style={[styles.description, { width: getDeviceType() === "mobile" ? "100%" : undefined }]}>
                  <View style={styles.subColumn}>
                    <Content theme={theme} colorScheme={colorScheme} text={club.Description.Title} fontWeight="bold" fontSize={18} />
                    <Content theme={theme} colorScheme={colorScheme} text={club.Description.Content} />
                  </View>
                </View>
                {getDeviceType() !== "mobile" && <View style={styles.spacer} />}
              </View>
            </View>
          ))}
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  column: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  row: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  spacer: {
    flex: 1,
  },
  club: {
    flex: 3,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  description: {
    flex: 6,
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
