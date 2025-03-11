import { Material3Theme } from "@pchmn/expo-material3-theme";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
  avatar: string;
  nickname: string;
  language?: "jp" | "zh" | "en";
};

export default function Introduction({ theme, colorScheme, avatar, nickname, language }: Props) {
  const fontColor = theme[colorScheme].onPrimaryContainer;
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
            <Text style={[styles.label, { color: fontColor }]}>
              { language === "jp" || language === undefined && `ハロ、私は ${nickname} です` }
              { language === "zh" && `你好，我是 ${nickname}` }
              { language === "en" && `Hello, I am ${nickname}` }
            </Text>
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
  label: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
