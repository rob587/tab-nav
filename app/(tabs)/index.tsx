import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.contenitore}>
      <Text style={styles.titolo}>Home.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: { flex: 1, justifyContent: "center", alignItems: "center" },
  titolo: { fontSize: 32 },
});
