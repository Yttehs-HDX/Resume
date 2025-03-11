import Card from "@/components/TextCard";
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
      title={Education.Title}
      content={Education.Content}
    />
  );
}
