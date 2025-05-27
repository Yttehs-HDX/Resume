import { Material3Theme } from "@pchmn/expo-material3-theme";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
  avatar: string;
  nickname: string;
};

export default function Introduction({ theme, colorScheme, avatar, nickname }: Props) {
  const fontColor = theme[colorScheme].onSecondaryContainer;
  const avatarBackgroundColor = theme[colorScheme].inversePrimary;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[styles.imageContainer, { backgroundColor: avatarBackgroundColor }]}>
            <Image
              style={styles.image}
              source={{ uri: avatar }}
            />
          </View>
          <View style={styles.spacer} />
          <View style={styles.labelContainer}>
            <View style={styles.labelRow}>
              <Text style={[styles.label1, { color: fontColor }]}>{nickname}</Text>
              <Text style={[styles.label2, { color: fontColor }]}>です</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 32,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    padding: 16,
    borderRadius: 30,
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
  labelRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
  },
  label1: {
    fontSize: 32,
    fontWeight: "bold",
  },
  label2: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
