import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "skyblue",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Hello Welcome to Koddev
      </Text>

      <Link
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "white",
          color: "black",
          borderRadius: 5,
        }}
        href="/about"
      >
        Go to About
      </Link>
    </View>
  );
}
