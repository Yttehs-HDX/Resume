import * as Linking from "expo-linking";
import { Platform } from "react-native";

export const openUrl = (url: string, newTab?: boolean) => {
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

export const getCurrentUrl = () => {
  return typeof window !== 'undefined' ? window.location.href : '';
};

export const openEmail = (email: string) => {
  openUrl(`mailto:${email}`, true);
};
