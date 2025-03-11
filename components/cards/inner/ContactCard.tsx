import Card from "@/components/TextCard";
import { Contact } from "@/constants/Contact";
import { Material3Theme } from "@pchmn/expo-material3-theme";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function ContactCard({ theme, colorScheme }: Props) {
  return (
    <Card
      theme={theme}
      colorScheme={colorScheme}
      title={Contact.Title}
      content={Contact.Content}
    />
  );
}
