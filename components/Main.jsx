import { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { getLatestGames } from "../lib/metacritic";
// import Constants from "expo-constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard, GameCard } from "./GameCard";
import { Logo } from "../components/Logo";
import { Link } from "expo-router";
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
      <View style={{ marginBottom: 20 }}>
        <Logo />
      </View>

      <Link href="/about" className="text-blue-400 text-xl">
        Ir al about
      </Link>

      {games.length === 0 ? (
        <ActivityIndicator size="large" color="red" /> // Si no hay juegos o carga los juegos , mostramos un spinner
      ) : (
        <>
          <FlatList
            data={games}
            keyExtractor={(game) => game.slug}
            renderItem={({ item, index }) => (
              <AnimatedGameCard game={item} index={index} />
            )}
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
