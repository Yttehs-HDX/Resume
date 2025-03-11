import Card from "@/components/card/Card";
import Content from "@/components/card/inner/Content";
import Title from "@/components/card/inner/Title";
import { Certificate } from "@/constants/Certificate";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { View } from "react-native";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function CertificateCard({ theme, colorScheme }: Props) {
  return (
    <Card
      theme={theme}
      colorScheme={colorScheme}
      title={
        <>
          <Title theme={theme} colorScheme={colorScheme} text={Certificate.Title} />
        </>
      }
      content={
        <View>
          {Certificate.List.map((item, index) => (
            <Content key={index} theme={theme} colorScheme={colorScheme} text={item} />
          ))}
        </View>
      }
    />
  );
}
