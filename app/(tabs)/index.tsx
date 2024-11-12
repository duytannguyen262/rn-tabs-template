import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Link } from "expo-router";

export default function TabOneScreen() {
  const userInfo = useSelector<RootState>((state) => state.auth.userInfo);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>{JSON.stringify(userInfo)}</Text>
      <Link href="/(auth)/sign-in">Go to Sign In</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
