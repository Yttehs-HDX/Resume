import { Pressable, StyleSheet, Text } from "react-native";
import { Material3Theme } from "@pchmn/expo-material3-theme";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
  label: string;
  icon: React.ReactNode;
  onPress: () => void;
};

export default function TopBarButton({ theme, colorScheme, label, icon, onPress }: Props) {
  const color = theme[colorScheme].onPrimaryContainer;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      {icon}
      <Text style={[styles.label, { color: color }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
