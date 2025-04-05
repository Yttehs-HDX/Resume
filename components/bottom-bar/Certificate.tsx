import { openUrl } from "@/utils/UrlUtil";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function Certificate({ theme, colorScheme }: Props) {
  const backgroundColor = theme[colorScheme].tertiaryContainer;
  const fontColor = theme[colorScheme].onTertiaryContainer;
  const linkColor = theme[colorScheme].tertiary;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.certificate, { color: fontColor }]}>© 2024 - 2025 Shetty Yttehs</Text>
      <View style={styles.row}>
        <Text style={[styles.poweredBy, { color: fontColor }]}>Powered by </Text>
        <TouchableOpacity onPress={() => openUrl("https://expo.dev", true)}>
          <Text style={[styles.poweredBy, { color: linkColor }]}>React Native Expo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 16,
  },
  row: {
    flexDirection: "row",
  },
  certificate: {
    fontSize: 18,
  },
  poweredBy: {
    fontSize: 16,
  },
});
