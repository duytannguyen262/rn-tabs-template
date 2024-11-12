import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "./Themed";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import icons from "@/constants/icons";

export default function Header() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>
          <Image style={styles.logo} source={icons.logo} />
        </Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 38,
    height: 38,
  },
});
