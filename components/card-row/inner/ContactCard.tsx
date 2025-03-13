import Content from "@/components/card/card-inner/Content";
import Title from "@/components/card/card-inner/Title";
import Card from "@/components/card/Card";
import { Contact } from "@/constants/Contact";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import ClickableContent from "@/components/card/card-inner/ClickableContent";
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
        <View>
          <View style={styles.row}>
            <Content theme={theme} colorScheme={colorScheme} text="Email: " />
            <ClickableContent
              theme={theme}
              colorScheme={colorScheme}
              text={Contact.Email1}
              onClick={() => openEmail(Contact.Email1)}
            />
          </View>
          <View style={styles.row}>
            <Content theme={theme} colorScheme={colorScheme} text="Email: " />
            <ClickableContent
              theme={theme}
              colorScheme={colorScheme}
              text={Contact.Email2}
              onClick={() => openEmail(Contact.Email2)}
            />
          </View>
          <View style={styles.row}>
            <Content theme={theme} colorScheme={colorScheme} text="酷安@" />
            <ClickableContent
              theme={theme}
              colorScheme={colorScheme}
              text={Contact.CoolApkUsername}
              onClick={() => openUrl(Contact.CoolApk, true)}
            />
          </View>
        </View>
      }
    />
  );
}


const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
