import Card from "@/components/TextCard";
import { Outstanding } from "@/constants/Outstanding";
import { Material3Theme } from "@pchmn/expo-material3-theme";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function OutstandingCard({ theme, colorScheme }: Props) {
  return (
    <Card
      theme={theme}
      colorScheme={colorScheme}
      title={Outstanding.Title}
      content={Outstanding.Content}
    />
  );
}
