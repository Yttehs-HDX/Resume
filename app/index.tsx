import { ScrollView, StyleSheet, Text, Pressable, useColorScheme, View } from "react-native";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { Stack } from "expo-router";
import Effect from "@/components/utils/Effect";
import TopBarButton from "@/components/top-bar/TopBarButton";
import { openUrl } from "@/components/utils/UrlUtil";
import Introduction from "@/components/Introduction";
import Card from "@/components/Card";
import { UIConfig } from "@/storage/UIConfig";
import { BasicInfo } from "@/storage/BasicInfo";
import { Outstanding } from "@/storage/card/Outstanding";
import { ProfessionalSkills } from "@/storage/card/ProfessionalSkills";
import { Contact } from "@/storage/card/Contact";

export default function Index() {
  const colorScheme = useColorScheme() || "light";
  const { theme } = useMaterial3Theme({ fallbackSourceColor: UIConfig.DefaultColor });

  return (
    <>
      <Stack.Screen options={{
          headerStyle: [{
            backgroundColor: theme[colorScheme].primaryContainer,
          }],
          headerTitle() {
            return (
              <Pressable onPress={ () => openUrl(BasicInfo.Resume, false) }>
                <Text style={[
                  { color: theme[colorScheme].onPrimaryContainer },
                  styles.headerTitle,
                ]}>
                  {BasicInfo.NicknameShort}'s Resume
                </Text>
              </Pressable>
            )
          },
          headerTitleStyle: [
            { color: theme[colorScheme].onPrimaryContainer },
            styles.headerTitle,
          ],
          headerShadowVisible: false,

          headerRight() {
            return (
              <View style={styles.buttonRow}>
                <TopBarButton
                  style={styles.button}
                  colorScheme={colorScheme}
                  label="Code"
                  lib="FontAwesome5"
                  icon="laptop-code"
                  onPress={ () => openUrl(BasicInfo.SourceCode, true) }
                />
                <TopBarButton
                  style={styles.button}
                  colorScheme={colorScheme}
                  label="Blog"
                  lib="Entypo"
                  icon="pencil"
                  onPress={ () => openUrl(BasicInfo.Blog, true) }
                />
                <TopBarButton
                  style={styles.button}
                  colorScheme={colorScheme}
                  label="Github"
                  lib="AntDesign"
                  icon="github"
                  onPress={ () => openUrl(BasicInfo.Github, true) }
                />
              </View>
            );
          },
        }} />
      <ScrollView style={[styles.scrollView, { backgroundColor: theme[colorScheme].surface }]}>
        <View style={[styles.contentContainer, { backgroundColor: theme[colorScheme].surface }]}>
          <Introduction
            theme={theme}
            colorScheme={colorScheme}
            avatar={BasicInfo.Avatar}
            nickname={BasicInfo.Nickname}
          />
          <View style={styles.cardColumn}>
            <Card
              theme={theme}
              colorScheme={colorScheme}
              title={Outstanding.Title}
              content={Outstanding.Content}
            />
            <Card
              theme={theme}
              colorScheme={colorScheme}
              title={ProfessionalSkills.Title}
              content={ProfessionalSkills.Content}
            />
            <Card
              theme={theme}
              colorScheme={colorScheme}
              title={Contact.Title}
              content={Contact.Content}
            />
          </View>
          <Effect listen={colorScheme} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "cursive",
    fontWeight: "bold",
    fontSize: 20,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardColumn: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 24,
  },
  button: {
    paddingLeft: 16,
  },
});
