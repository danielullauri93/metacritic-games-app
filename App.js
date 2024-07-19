import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { getLatestGames } from "./lib/metacritic";
export default function App() {
  const [games, setGames] = useState([]);

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
  },
  card:{
    
  },
});
