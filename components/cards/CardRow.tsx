import { View, StyleSheet } from "react-native";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import OutstandingCard from "./inner/OutstandingCard";
import ProfessionalSkillsCard from "./inner/ProfessionalSkillsCard";
import EducationCard from "./inner/EducationCard";
import ContactCard from "./inner/ContactCard";

type CardRowProps = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function CardRow({ theme, colorScheme }: CardRowProps) {
  return (
    <View style={styles.cardColumn}>
      <OutstandingCard theme={theme} colorScheme={colorScheme} />
      <ProfessionalSkillsCard theme={theme} colorScheme={colorScheme} />
      <EducationCard theme={theme} colorScheme={colorScheme} />
      <ContactCard theme={theme} colorScheme={colorScheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardColumn: {
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
});
