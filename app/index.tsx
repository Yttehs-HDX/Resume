import { Platform, Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { Stack } from "expo-router";
import Effect from "@/components/Effect";
import * as Linking from "expo-linking";
import TopBarButton from "@/components/TopBarButton";
import { openGithub, openUrl } from "@/components/utils/UrlUtil";

const defaultColor = "#B39DDB";
const title = "Shetty's Resume";
const content = "TODO";

export default function Index() {
  const colorScheme = useColorScheme() || "light";
  const { theme } = useMaterial3Theme({ fallbackSourceColor: defaultColor });

  return (
    <>
      <Stack.Screen options={{
          headerStyle: [{
            backgroundColor: theme[colorScheme].primaryContainer,
          }],
          headerTitle() {
            return (
              <Pressable onPress={ () => openUrl("https://resume.shettydev.com", false) }>
                <Text style={[
                  { color: theme[colorScheme].onPrimaryContainer },
                  styles.headerTitle,
                ]}>
                  {title}
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
                  label="Blog"
                  lib="Entypo"
                  icon="pencil"
                  onPress={ () => openUrl("https://blog.shettydev.com", true) }
                />
                <TopBarButton
                  style={styles.button}
                  colorScheme={colorScheme}
                  label="Github"
                  lib="AntDesign"
                  icon="github"
                  onPress={ () => openGithub("Yttehs-HDX") }
                />
              </View>
            );
          },
        }} />
      <View style={[
        { backgroundColor: theme[colorScheme].secondaryContainer },
        styles.contentContainer
      ]}>
        <Text style={{ color: theme[colorScheme].onSecondaryContainer }}>
          {content}
        </Text>
        <Effect listen={colorScheme} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "cursive",
    fontWeight: "bold",
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
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
