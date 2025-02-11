import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";

type Props = {
  colorScheme: "light" | "dark";
};

export default function Introduction({ colorScheme }: Props) {
  const { theme } = useMaterial3Theme();
  const fontColor = theme[colorScheme].onPrimaryContainer;

  return (
    <View style={styles.rowContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
          style={styles.image}
          source={{ uri: "https://avatars.githubusercontent.com/u/72240633?s=400&u=7b32b5df0b0d4fa852f579e82cf78b403fa98b67&v=4" }}
        />
        <View style={styles.spacer} />
        <View style={styles.labelContainer}>
          <Text style={[styles.label, { color: fontColor }]}>
            Hello! 私は Shetty Yttehs です
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  spacer: {
    width: 16,
  },
  labelContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  label: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
