import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  // Text,
  View,
  // // Pressable,
  // ScrollView,
  // Image,
} from "react-native";
import { Main } from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";
export function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
});
