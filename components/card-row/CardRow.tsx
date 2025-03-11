import { View, StyleSheet } from "react-native";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import OutstandingCard from "./inner/OutstandingCard";
import ProfessionalSkillsCard from "./inner/ProfessionalSkillsCard";
import EducationCard from "./inner/EducationCard";
import ContactCard from "./inner/ContactCard";
import ClubExperienceCard from "./inner/ClubExperienceCard";
import CertificateCard from "./inner/CertificateCard";
import Line from "../card/inner/Line";
import RepoCardList from "./inner/RepoCardList";

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
      <ClubExperienceCard theme={theme} colorScheme={colorScheme} />
      <CertificateCard theme={theme} colorScheme={colorScheme} />
      <ContactCard theme={theme} colorScheme={colorScheme} />
      <Line theme={theme} colorScheme={colorScheme} width="30%" />
      <RepoCardList theme={theme} colorScheme={colorScheme} />
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
