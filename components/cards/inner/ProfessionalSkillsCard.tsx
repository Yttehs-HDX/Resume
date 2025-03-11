import Card from "@/components/TextCard";
import Content from "@/components/text-card-inner/Content";
import Title from "@/components/text-card-inner/Title";
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
      title={<Title theme={theme} colorScheme={colorScheme} text={ProfessionalSkills.Title} />}
      content={<Content theme={theme} colorScheme={colorScheme} text={ProfessionalSkills.Content} />}
    />
  );
}
