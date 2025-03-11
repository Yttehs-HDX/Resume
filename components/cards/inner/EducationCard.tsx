import Card from "@/components/Card";
import Content from "@/components/text-card-inner/Content";
import Title from "@/components/text-card-inner/Title";
import { Education } from "@/constants/Education";
import { Material3Theme } from "@pchmn/expo-material3-theme";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function EducationCard({ theme, colorScheme }: Props) {
  return (
    <Card
      theme={theme}
      colorScheme={colorScheme}
      title={<Title theme={theme} colorScheme={colorScheme} text={Education.Title} />}
      content={<Content theme={theme} colorScheme={colorScheme} text={Education.Content} />}
    />
  );
}
