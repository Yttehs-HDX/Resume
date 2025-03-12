import Card from "@/components/card/Card";
import Content from "@/components/card/card-inner/Content";
import Title from "@/components/card/card-inner/Title";
import { Certificate } from "@/constants/Certificate";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { View, StyleSheet } from "react-native";

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
          <FontAwesome name="certificate" size={24} color={theme[colorScheme].onPrimaryContainer} />
          <Title theme={theme} colorScheme={colorScheme} text={Certificate.Title} />
        </>
      }
      content={
        <View>
          {Certificate.List.map((item, index) => (
            <View key={index} style={styles.row}>
              <Ionicons name="checkmark-circle" size={16} color={theme[colorScheme].onPrimaryContainer} />
              <Content theme={theme} colorScheme={colorScheme} text={item} />
            </View>
          ))}
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-start",
    gap: 8,
  },
});
