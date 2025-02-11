import { Platform, Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { Stack } from "expo-router";
import Effect from "@/components/Effect";
import * as Linking from "expo-linking";

const url = "https://resume.shettydev.com";
const defaultColor = "#B39DDB";
const title = "Shetty's Resume";
const content = "TODO";

export default function Index() {
  const colorScheme = useColorScheme() || "light";
  const { theme } = useMaterial3Theme({ fallbackSourceColor: defaultColor });

  const openResume = () => {
    if (Platform.OS === "web") {
      window.location.href = url;
    } else {
      Linking.openURL(url);
    }
  };

  return (
    <>
      <Stack.Screen options={{
          headerStyle: [{
            backgroundColor: theme[colorScheme].primaryContainer,
          }],
          headerTitle() {
            return (
              <Pressable onPress={ openResume }>
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
});
