import { Dimensions, View } from "react-native";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import getDeviceType from "@/utils/Device";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function RepoCardList({ theme, colorScheme }: Props) {
  const screenWidth = Dimensions.get("window").width;
  const cardWidthMin = 100;
  const maxCardPerRow = getDeviceType() === "mobile" ? 1 : screenWidth / cardWidthMin;

  return (
    <View>
    </View>
  );
}
