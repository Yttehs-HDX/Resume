import Content from "@/components/text-card-inner/Content";
import Title from "@/components/text-card-inner/Title";
import Card from "@/components/Card";
import { Contact } from "@/constants/Contact";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function ContactCard({ theme, colorScheme }: Props) {
  return (
    <Card
      theme={theme}
      colorScheme={colorScheme}
      title={
        <>
          <MaterialIcons name="contact-mail" size={24} color={theme[colorScheme].onPrimaryContainer} />
          <Title theme={theme} colorScheme={colorScheme} text={Contact.Title} />
        </>
      }
      content={<Content theme={theme} colorScheme={colorScheme} text={Contact.Content} />}
    />
  );
}
