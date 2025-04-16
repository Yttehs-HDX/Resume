import { BasicInfo } from "@/constants/BasicInfo";
import { openUrl } from "@/utils/UrlUtil";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function Header({ theme, colorScheme }: Props) {
  return (
    <Pressable onPress={() => openUrl(BasicInfo.Resume)} accessibilityRole="button">
      <Text style={[styles.headerTitle, { color: theme[colorScheme].onPrimaryContainer }]}>
        {`${BasicInfo.NicknameShort}'s Resume`}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "cursive",
    fontWeight: "bold",
    fontSize: 20,
  },
});
