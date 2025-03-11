import Card from "@/components/Card";
import Content from "@/components/card-inner/Content";
import Title from "@/components/card-inner/Title";
import { ProfessionalSkills } from "@/constants/ProfessionalSkills";
import { Ionicons } from "@expo/vector-icons";
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
      title={
        <>
          <Ionicons name="briefcase" size={24} color={theme[colorScheme].onPrimaryContainer} />
          <Title theme={theme} colorScheme={colorScheme} text={ProfessionalSkills.Title} />
        </>
      }
      content={<Content theme={theme} colorScheme={colorScheme} text={ProfessionalSkills.Content} />}
    />
  );
}
