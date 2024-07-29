import { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator, Pressable } from "react-native";
import { getLatestGames } from "../lib/metacritic";
// import Constants from "expo-constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard, GameCard } from "./GameCard";
import { Logo } from "../components/Logo";
import { Link } from "expo-router";
import { CircleInfoIcon } from "./Icons";

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
      <View className="flex-row justify-between items-center mb-4 mx-2">
        <View>
          <Logo />
        </View>
      </View>

      <Link asChild href="/about">
        <Pressable>
          <CircleInfoIcon />
        </Pressable>
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
