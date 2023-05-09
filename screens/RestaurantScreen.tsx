import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RestaurantCard } from '../components/RestaurantCard'
import { urlFor } from '../lib/sanity'
import {
  ArrowLeftIcon,
  ChevronRight,
  HelpCircle,
  LocateIcon,
  MapPin,
  Star,
} from 'lucide-react-native'
import DishRow from '../components/DishRow'
import Basket from '../components/Basket'

const RestaurantScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const params = route.params as RestaurantCard

  const {
    id,
    lat,
    long,
    address,
    dishes,
    genre,
    imgUrl,
    rating,
    short_description,
    title,
  } = params

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <>
      <Basket />
      <ScrollView>
        <View className='relative'>
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className='h-56 w-full bg-gray-300 p-4'
          />
        </View>
        <TouchableOpacity
          onPress={navigation.goBack}
          className='absolute left-5 top-14 rounded-full bg-gray-100 p-2'
        >
          <ArrowLeftIcon size={20} color='#00CCBB' />
        </TouchableOpacity>

        {/* Header */}
        <View className='bg-white'>
          <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>

            <View className='my-1 flex-row space-x-2'>
              <View className='flex-row items-center space-x-1'>
                <Star color='green' opacity={0.5} size={22} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-green-500'>{rating}</Text> · {genre}
                </Text>
              </View>

              <View className='flex-row items-center space-x-1'>
                <MapPin color='gray' opacity={0.4} size={22} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-xs text-gray-500'>
                    Nearby · {address}
                  </Text>
                </Text>
              </View>
            </View>

            <Text className='mt-2 pb-4 text-gray-500'>{short_description}</Text>
          </View>

          <TouchableOpacity className='flex-row items-center space-x-2 border-y border-gray-300 p-4'>
            <HelpCircle color='gray' opacity={0.6} size={20} />
            <Text className='text-md flex-1 pl-2 font-bold'>
              Have a food allergy ?
            </Text>
            <ChevronRight className='text-primary' />
          </TouchableOpacity>
        </View>

        {/* Menu */}
        <View>
          <Text className='mb-3 px-4 pt-6 text-xl font-bold'>Menu</Text>

          {/* Dishrows */}
          {dishes?.map((dish) => (
            <DishRow key={dish._id} dish={dish} />
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default RestaurantScreen
