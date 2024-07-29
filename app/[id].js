import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Detail() {
  return (
    <View className="flex-1 justify-center items-center">
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalle del juego
        </Text>
        <Link href="/" className="text-blue-500">
          Volver atras
        </Link>
      </View>
    </View>
  );
}