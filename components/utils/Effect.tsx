import { StyleSheet, View, Text } from "react-native";

type Props = {
  listen: any;
};

export default function Effect({ listen }: Props) {
  return (
    <View style={styles.container}>
      <Text>{listen.toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 0,
    height: 0,
    overflow: "hidden",
  },
});
