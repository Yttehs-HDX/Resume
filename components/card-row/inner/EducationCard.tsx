import Card from "@/components/card/Card";
import Content from "@/components/card/inner/Content";
import Title from "@/components/card/inner/Title";
import { Education } from "@/constants/Education";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { FontAwesome6 } from "@expo/vector-icons";

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
      content={<Content theme={theme} colorScheme={colorScheme} text={Education.Content} />}
    />
  );
}
