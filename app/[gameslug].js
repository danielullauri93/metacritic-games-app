import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import Screen from "../components/Screen";
import { getGameDetails } from "../lib/metacritic";
import { ActivityIndicator } from "react-native-web";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug).then(setGameInfo);
    }
  }, [gameslug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "The Legend of Zelda: Breath of the Wild",
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null? (
          <ActivityIndicator color={'fff'} size="large" />
        )}
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalle del juego {gameslug}
        </Text>
        <Link href="/" className="text-blue-500">
          Volver atras
        </Link>
      </View>
    </Screen>
  );
}
