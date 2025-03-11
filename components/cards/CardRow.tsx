import { View, StyleSheet } from "react-native";
import Card from "@/components/TextCard";
import { Outstanding } from "@/constants/Outstanding";
import { ProfessionalSkills } from "@/constants/ProfessionalSkills";
import { Education } from "@/constants/Education";
import { Contact } from "@/constants/Contact";
import { Material3Theme } from "@pchmn/expo-material3-theme";

type CardRowProps = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function CardRow({ theme, colorScheme }: CardRowProps) {
  return (
    <View style={styles.cardColumn}>
      <Card
        theme={theme}
        colorScheme={colorScheme}
        title={Outstanding.Title}
        content={Outstanding.Content}
      />
      <Card
        theme={theme}
        colorScheme={colorScheme}
        title={ProfessionalSkills.Title}
        content={ProfessionalSkills.Content}
      />
      <Card
        theme={theme}
        colorScheme={colorScheme}
        title={Education.Title}
        content={Education.Content}
      />
      <Card
        theme={theme}
        colorScheme={colorScheme}
        title={Contact.Title}
        content={Contact.Content}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardColumn: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
});
