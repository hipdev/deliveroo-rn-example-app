import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text className="text-red-500"></Text>

      <View className="flex-row pb-3 mx-4 items-center space-x-3">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 rounded-full"
        />

        <View>
          <Text className="font-bold text-gray-400 text-xs">Deliver now</Text>
          <Text className="font-bold text-xl">Current location</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
