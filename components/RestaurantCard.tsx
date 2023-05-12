import { useNavigation } from '@react-navigation/native'

import { MapPin, Star } from 'lucide-react-native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { urlFor } from '../lib/sanity'
import { Dish, Restaurant } from '../sanity/types/schema'

export type RestaurantCardProps = {
  restaurant: RestaurantFixed
}

export type RestaurantFixed = Omit<Restaurant, 'type' | 'dishes'> & {
  type: { name: string }
  dishes: Dish[]
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const navigation = useNavigation()

  const { image, rating, type, address, name } = restaurant

  return (
    <TouchableOpacity
      className='mr-3 bg-white shadow'
      onPress={() => {
        navigation.navigate('Restaurant', { ...restaurant })
      }}
    >
      <Image
        source={{ uri: urlFor(image).url() }}
        className='h-36 w-64 rounded-sm'
      />
      <View className='px-3 pb-4'>
        <Text className='pt-2 text-lg font-bold text-gray-800'>{name}</Text>

        {/* Rates */}
        <View className='flex-row items-center space-x-2'>
          <Star fill='green' color='green' opacity={0.5} size={17} />
          <Text className='text-xs text-gray-500'>
            <Text className='text-green-500'>{rating}</Text> · {type.name}
          </Text>
        </View>

        <View className='mt-1 flex-row items-center space-x-1'>
          <MapPin color='gray' opacity={0.4} size={20} />
          <Text className='text-xs text-gray-500'>Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard
