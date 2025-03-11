import Card from "@/components/TextCard";
import { ProfessionalSkills } from "@/constants/ProfessionalSkills";
import { Material3Theme } from "@pchmn/expo-material3-theme";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function ProfessionalSkillsCard({ theme, colorScheme }: Props) {
  return (
    <Card
      theme={theme}
      colorScheme={colorScheme}
      title={ProfessionalSkills.Title}
      content={ProfessionalSkills.Content}
    />
  );
}
