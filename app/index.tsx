import { ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { Stack } from "expo-router";
import Effect from "@/components/Effect";
import TopBarButton from "@/components/TopBarButton";
import { openGithub, openUrl } from "@/components/utils/UrlUtil";
import MainContent from "@/components/MainContent";
import Introduction from "@/components/Introduction";

const defaultColor = "#1F96F2";
const title = "Shetty's Resume";

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
              <TouchableOpacity onPress={ () => openUrl("https://resume.shettydev.com", false) }>
                <Text style={[
                  { color: theme[colorScheme].onPrimaryContainer },
                  styles.headerTitle,
                ]}>
                  {title}
                </Text>
              </TouchableOpacity>
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
                  onPress={ () => openUrl("https://github.com/Yttehs-HDX/Resume", true) }
                />
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
      <ScrollView style={{ backgroundColor: theme[colorScheme].secondaryContainer }}>
        <View style={[
          { backgroundColor: theme[colorScheme].secondaryContainer },
          styles.contentContainer
        ]}>
          <Introduction colorScheme={colorScheme} />
          <MainContent colorScheme={colorScheme} />
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
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
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
