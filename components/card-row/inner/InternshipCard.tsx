import Card from "@/components/card/Card";
import Content from "@/components/card/card-inner/Content";
import Title from "@/components/card/card-inner/Title";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { Internship } from "@/constants/Internship";
import { View, StyleSheet, ScrollView } from "react-native";
import getDeviceType from "@/utils/Device";
import Line from "@/components/card/card-inner/Line";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function InternshipCard({ theme, colorScheme }: Props) {
  return (
    <Card
      theme={theme}
      colorScheme={colorScheme}
      title={
        <>
          <MaterialIcons name="work" size={24} color={theme[colorScheme].onPrimaryContainer} />
          <Title theme={theme} colorScheme={colorScheme} text={Internship.Title} />
        </>
      }
      content={
        <ContentInner theme={theme} colorScheme={colorScheme} />
      }
    />
  );
}

type ContentInnerProps = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

function ContentInner({ theme, colorScheme }: ContentInnerProps) {
  return (
    <View style={styles.container}>
      {Internship.InternshipList.map((internship, index) => (
        <View key={index} style={styles.column}>
          { index !== 0 && <Line theme={theme} colorScheme={colorScheme} /> }
          <View style={[styles.row, {
            flexDirection: getDeviceType() === "mobile" ? "column" : "row",
          }]}>
            {getDeviceType() !== "mobile" && <View style={styles.spacer} />}
            <View style={[styles.enterprise, { width: getDeviceType() === "mobile" ? "100%" : undefined }]}>
              <View style={styles.subColumn}>
                <Content theme={theme} colorScheme={colorScheme} text={`${internship.Enterprise}`} fontWeight="bold" fontSize={18} />
                <Content theme={theme} colorScheme={colorScheme} text={`${internship.Department} - ${internship.Job}`} fontWeight="bold" fontSize={18} />
                <Content theme={theme} colorScheme={colorScheme} text={internship.Duration} fontSize={18} />
              </View>
            </View>
            {getDeviceType() !== "mobile" && <View style={styles.spacer} />}
            <View style={[styles.description, { width: getDeviceType() === "mobile" ? "100%" : undefined }]}>
              {internship.Description.map((description, index) => (
                <View key={index} style={styles.subColumn}>
                  <Content theme={theme} colorScheme={colorScheme} text={description.Title} fontWeight="bold" fontSize={18} />
                  <Content theme={theme} colorScheme={colorScheme} text={description.Content} />
                </View>
              ))}
            </View>
            {getDeviceType() !== "mobile" && <View style={styles.spacer} />}
          </View>
        </View>
      ))}
    </View>
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
  enterprise: {
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
