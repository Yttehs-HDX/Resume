import { BasicInfo } from "@/constants/BasicInfo";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
  onClick: () => void;
};

export default function Header({ theme, colorScheme, onClick }: Props) {
  return (
    <Pressable onPress={onClick}>
      <Text style={[styles.headerTitle, { color: theme[colorScheme].onPrimaryContainer }]}>
        {`${BasicInfo.NicknameShort}'s Resume ( ゜- ゜)つロ乾杯~`}
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
