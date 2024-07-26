import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function About() {
  return (
    <ScrollView>
      <Link href="/" className="text-blue-400 text-xl mt-24">
        Ir al about
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">
        Sobre el proyecto
      </Text>

      <Text className="text-white text-white/90 mb-4">
        Este es un proyecto de ejemplo para mostrar el uso de React Native con
        Expo.
      </Text>

      <Text className="text-white text-white/90 mb-4">
        Este proyecto utiliza Expo para el desarrollo del app y React Native
        para el manejo del estado del juego.
      </Text>

      <Text className="text-white text-white/90 mb-4">
        Este proyecto utiliza la API de Metacritic para obtener los datos de los
        juegos y mostrarlos en la pantalla principal.
      </Text>
    </ScrollView>
  );
}
