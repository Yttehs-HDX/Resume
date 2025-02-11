import { Linking, Platform } from "react-native";

export const openUrl = (url: string, newTab: boolean) => {
  switch (Platform.OS) {
    case "web":
      if (newTab) {
        window.open(url, "_blank");
      } else {
        window.location.href = url;
      }
      break;
    default:
      Linking.openURL(url);
      break;
  }
};

export const openGithub = (username: string) => {
  const url = `https://github.com/${username}`;
  openUrl(url, true);
};
