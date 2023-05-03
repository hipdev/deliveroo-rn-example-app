import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

type Props = {
  title: string;
  imgUrl: string;
};

const CategoryCard = ({ title, imgUrl }: Props) => {
  return (
    <TouchableOpacity className="mr-3 relative">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded-full" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
