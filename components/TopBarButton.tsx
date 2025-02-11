import { Pressable, StyleSheet, Text } from "react-native";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";

type IconLib = 'AntDesign' | 'Entypo' | 'MaterialIcons';
const ICON_LIBS = {
  "AntDesign": AntDesign,
  "Entypo": Entypo,
  "MaterialIcons": MaterialIcons,
};

type Props = {
  style?: any;
  colorScheme: "light" | "dark";
  label: string;
  lib: IconLib;
  icon: string;
  onPress: () => void;
};

export default function TopBarButton({ style, colorScheme, label, lib, icon, onPress }: Props) {
  const { theme } = useMaterial3Theme();
  const color = theme[colorScheme].onPrimaryContainer;
  const Icon = ICON_LIBS[lib];

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      {/* @ts-ignore */}
      <Icon name={icon} size={24} color={color} />
      <Text style={[{ color: color }, styles.label]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {

  },
});
