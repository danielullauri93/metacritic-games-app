import { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { getLatestGames } from "../lib/metacritic";
// import Constants from "expo-constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";
import { Logo } from "../components/Logo";
export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets(); // Usamos el hook para obtener las insets de la pantalla.

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {games.length === 0 ? (
        <ActivityIndicator size="large" color="red" /> // Si no hay juegos o carga los juegos , mostramos un spinner
      ) : (
        <>
          <View style={{ marginBottom: 20 }}>
            <Logo />
          </View>
          <FlatList
            data={games}
            keyExtractor={(game) => game.slug}
            renderItem={({ item }) => <GameCard game={item} />}
          >
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </FlatList>
        </>
      )}
    </View>
  );
}

/* En el style del primer View usamos el hook que hicimos con safeareainsets para que tenga una separacion por ambas partes */
