import { BasicInfo } from "@/constants/BasicInfo";
import { View, StyleSheet } from "react-native";
import TopBarButton from "./inner/TopBarButton";
import { openUrl } from "@/utils/UrlUtil";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function TopButtonRow({ theme, colorScheme }: Props) {
  const color = theme[colorScheme].onPrimaryContainer;

  return (
    <View style={styles.buttonRow}>
      <TopBarButton
        theme={theme}
        colorScheme={colorScheme}
        label="Source"
        icon={<MaterialCommunityIcons name="source-repository" size={24} color={color} />}
        onPress={ () => openUrl(BasicInfo.SourceCode, true) }
      />
      <TopBarButton
        theme={theme}
        colorScheme={colorScheme}
        label="Blog"
        icon={<Ionicons name="logo-rss" size={24} color={color} />}
        onPress={ () => openUrl(BasicInfo.Blog, true) }
      />
      <TopBarButton
        theme={theme}
        colorScheme={colorScheme}
        label="Github"
        icon={<FontAwesome5 name="github" size={24} color={color} />}
        onPress={ () => openUrl(BasicInfo.Github, true) }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 16,
  },
});
