import { View } from "react-native";
import React from "react";

export default function Screen({ children }) {
  return <View className="flex-1 bg-black pt-4 px-2">{children}</View>;
}