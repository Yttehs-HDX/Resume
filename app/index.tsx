import { ScrollView, StyleSheet, useColorScheme, View, Dimensions } from "react-native";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { Stack } from "expo-router";
import Effect from "@/utils/Effect";
import { openUrl } from "@/utils/UrlUtil";
import Introduction from "@/components/Introduction";
import { UIConfig } from "@/storage/UIConfig";
import { BasicInfo } from "@/constants/BasicInfo";
import CardRow from "@/components/card-row/CardRow";
import getDeviceType from "@/utils/Device";
import Header from "@/components/Header";
import TopButtonRow from "@/components/TopButtonRow";
import Line from "@/components/card/card-inner/Line";
import RepoCardGrid from "@/components/RepoCardGrid";
import SubTitle from "@/components/SubTitle";
import { GithubRepos } from "@/constants/GithubRepos";

export default function Index() {
  const colorScheme = useColorScheme() || "light";
  const { theme } = useMaterial3Theme({ fallbackSourceColor: UIConfig.DefaultColor });
  const screenHeight = Dimensions.get("window").height;

  return (
    <>
      <Stack.Screen options={{
          headerStyle: [{ backgroundColor: theme[colorScheme].primaryContainer }],
          headerTitle() {
            return <Header
              theme={theme}
              colorScheme={colorScheme}
              onClick={() => openUrl(BasicInfo.Resume)}
            />;
          },
          headerShadowVisible: false,
          headerRight() {
            return (
              <TopButtonRow
                theme={theme}
                colorScheme={colorScheme}
              />
            );
          },
        }} />
      <ScrollView style={[styles.scrollView, { backgroundColor: theme[colorScheme].surface }]}>
        <View style={styles.contentContainer}>
          <View style={[styles.column, { width: (() => {
            switch (getDeviceType()) {
              case 'mobile':
                return "95%";
              case 'tablet':
                return "95%";
              default:
                return "90%";
            }
          })() }]}>
            <Introduction theme={theme} colorScheme={colorScheme} avatar={BasicInfo.Avatar} nickname={BasicInfo.Nickname} />
            <CardRow theme={theme} colorScheme={colorScheme} />
            <Line theme={theme} colorScheme={colorScheme} width="30%" />
            <SubTitle theme={theme} colorScheme={colorScheme} title={GithubRepos.Title} />
            <RepoCardGrid theme={theme} colorScheme={colorScheme} />
            <Effect listen={colorScheme} />
          </View>
        </View>
        <View style={{ height: screenHeight * 0.3 }} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  column: {
    gap: 32,
  },
});
