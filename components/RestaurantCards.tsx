import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MapPin, Star } from 'lucide-react-native'

type Props = {
  id: string
  imgUrl: string
  title: string
  rating: number
  genre: string
  address: string
  short_description: string
  dishes: []
  long: number
  lat: number
}

const RestaurantCards = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}: Props) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow'>
      <Image source={{ uri: imgUrl }} className='h-36 w-64 rounded-sm' />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>

        {/* Rates */}
        <View className='flex-row items-center space-x-1'>
          <Star fill='green' color='green' opacity={0.5} size={17} />
          <Text className='text-xs text-gray-500'>
            <Text className='text-green-500'>{rating}</Text>·{genre}
          </Text>
        </View>

        <View className='flex-row items-center space-x-1'>
          <MapPin color='gray' opacity={0.4} size={22} />
          <Text className='text-xs text-gray-500'>Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCards
