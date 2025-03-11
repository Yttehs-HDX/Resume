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
          <Image
            source={{ uri: Education.NEU.Avatar.UrL }}
            style={styles.image}
            resizeMode="contain"
          />
          <Content
            theme={theme}
            colorScheme={colorScheme}
            text={Education.NEU.Name}
          />
          <Content
            theme={theme}
            colorScheme={colorScheme}
            text={Education.NEU.Major}
          />
          <Content
            theme={theme}
            colorScheme={colorScheme}
            text={`${Education.NEU.Background} ${Education.NEU.Duration}`}
          />
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
    gap: 16,
  },
  image: {
    width: 100,
    height: 50,
  },
});
