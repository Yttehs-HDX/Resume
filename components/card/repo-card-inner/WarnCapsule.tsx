import { Material3Theme } from '@pchmn/expo-material3-theme';
import { View, StyleSheet, Text } from 'react-native';

type Props = {
  theme: Material3Theme;
  colorScheme: 'light' | 'dark';
  text: string;
};

export default function Capsule({ theme, colorScheme, text }: Props) {
  const backgroundColor = theme[colorScheme].error;
  const textColor = theme[colorScheme].onError;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
