import { ScrollView, StyleSheet, Text, Pressable, useColorScheme, View, Dimensions } from "react-native";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { Stack } from "expo-router";
import Effect from "@/utils/Effect";
import TopBarButton from "@/components/top-bar/TopBarButton";
import { openUrl } from "@/utils/UrlUtil";
import Introduction from "@/components/Introduction";
import { UIConfig } from "@/storage/UIConfig";
import { BasicInfo } from "@/constants/BasicInfo";
import CardRow from "@/components/cards/CardRow";
import getDeviceType from "@/utils/Device";

export default function Index() {
  const colorScheme = useColorScheme() || "light";
  const { theme } = useMaterial3Theme({ fallbackSourceColor: UIConfig.DefaultColor });
  const screenHeight = Dimensions.get("window").height;

  return (
    <>
      <Stack.Screen options={{
          headerStyle: [{ backgroundColor: theme[colorScheme].primaryContainer }],
          headerTitle() {
            return (
              <Pressable onPress={ () => openUrl(BasicInfo.Resume, false) }>
                <Text style={[styles.headerTitle, { color: theme[colorScheme].onPrimaryContainer }]}>
                  {BasicInfo.NicknameShort}'s Resume
                </Text>
              </Pressable>
            )
          },
          headerTitleStyle: [styles.headerTitle, { color: theme[colorScheme].onPrimaryContainer }],
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
        <View style={styles.contentContainer}>
          <View style={{ width: (() => {
            switch (getDeviceType()) {
              case 'mobile':
                return "95%";
              case 'tablet':
                return "95%";
              default:
                return "90%";
            }
          })() }}>
            <Introduction
              theme={theme}
              colorScheme={colorScheme}
              avatar={BasicInfo.Avatar}
              nickname={BasicInfo.Nickname}
            />
            <CardRow
              theme={theme}
              colorScheme={colorScheme}
            />
            <Effect listen={colorScheme} />
          </View>
        </View>
        <View style={{ height: screenHeight * 0.3 }} />
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
    alignItems: "center",
    justifyContent: "center",
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
