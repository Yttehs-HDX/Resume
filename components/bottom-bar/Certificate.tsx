import { openUrl } from "@/utils/UrlUtil";
import { CertificateInfo } from "@/constants/CertificateInfo";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Animation from "react-native-animatable";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function Certificate({ theme, colorScheme }: Props) {
  const backgroundColor = theme[colorScheme].tertiaryContainer;
  const fontColor = theme[colorScheme].onTertiaryContainer;
  const iconColor = theme[colorScheme].error;
  const linkColor = theme[colorScheme].tertiary;

  const pulseAnimation = {
    from: {
      transform: [{ scale: 0.9 }],
    },
    to: {
      transform: [{ scale: 1.1 }],
    },
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.row}>
        <Text style={[styles.certificate, { color: fontColor }]}>
          {`© ${CertificateInfo.StartYear} - ${CertificateInfo.EndYear} `}
        </Text>
        <Animation.View
          animation={pulseAnimation}
          duration={600}
          iterationCount="infinite"
          easing="ease-in-out"
        >
          <MaterialIcons name="favorite" size={20} color={iconColor} />
        </Animation.View>
        <Text style={[styles.certificate, { color: fontColor }]}>
          {` ${CertificateInfo.Organization}`}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.poweredBy, { color: fontColor }]}>Powered by </Text>
        <TouchableOpacity
          onPress={() => openUrl(CertificateInfo.PoweredFrameworkUrl, true)}
          accessibilityRole="link"
        >
          <Text style={[styles.poweredBy, { color: linkColor }]}>
            {CertificateInfo.PoweredFramework}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  certificate: {
    fontSize: 18,
  },
  poweredBy: {
    fontSize: 16,
  },
});
