import Content from "@/components/card-inner/Content";
import Title from "@/components/card-inner/Title";
import Card from "@/components/Card";
import { Contact } from "@/constants/Contact";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import ClickableContent from "@/components/card-inner/ClickableContent";
import { BasicInfo } from "@/constants/BasicInfo";
import { openEmail, openUrl } from "@/utils/UrlUtil";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function ContactCard({ theme, colorScheme }: Props) {
  return (
    <Card
      theme={theme}
      colorScheme={colorScheme}
      title={
        <>
          <MaterialCommunityIcons name="link-variant" size={24} color={theme[colorScheme].onPrimaryContainer} />
          <Title theme={theme} colorScheme={colorScheme} text={Contact.Title} />
        </>
      }
      content={
        <View style={styles.column}>
          <View style={styles.row}>
            <Content theme={theme} colorScheme={colorScheme} text="Email: " />
            <ClickableContent
              theme={theme}
              colorScheme={colorScheme}
              text={BasicInfo.Email1}
              onClick={() => openEmail(BasicInfo.Email1)}
            />
          </View>
          <View style={styles.row}>
            <Content theme={theme} colorScheme={colorScheme} text="Email: " />
            <ClickableContent
              theme={theme}
              colorScheme={colorScheme}
              text={BasicInfo.Email2}
              onClick={() => openEmail(BasicInfo.Email2)}
            />
          </View>
          <View style={styles.row}>
            <Content theme={theme} colorScheme={colorScheme} text="酷安@" />
            <ClickableContent
              theme={theme}
              colorScheme={colorScheme}
              text={BasicInfo.CoolApkUsername}
              onClick={() => openUrl(BasicInfo.CoolApk, true)}
            />
          </View>
        </View>
      }
    />
  );
}


const styles = StyleSheet.create({
  column: {
    gap: -8,
  },
  row: {
    flexDirection: "row",
  },
});
