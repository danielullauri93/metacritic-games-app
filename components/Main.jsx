import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  // Pressable,
  ScrollView,
  Image,
} from "react-native";
import { getLatestGames } from "../lib/metacritic";
// import Constants from "expo-constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        {games.map((game) => (
          <View key={game.slug} style={styles.card}>
            <Image source={{ uri: game.image }} style={styles.image} />
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.score}>{game.score}</Text>
            <Text style={styles.description}>{game.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight, // Hace que se renderice debajo del status bar tatno en ios como android
    padding: 12,
  },
  card: {
    marginBottom: 20,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 5,
  },
});
