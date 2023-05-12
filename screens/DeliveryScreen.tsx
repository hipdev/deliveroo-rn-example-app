import { useNavigation } from '@react-navigation/native'

import { X } from 'lucide-react-native'
import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import * as Progress from 'react-native-progress'

import { useRestaurantStore } from '../stores/restaurantStore'

const DeliveryScreen = () => {
  const navigation = useNavigation()
  const { restaurant } = useRestaurantStore()

  return (
    <View className='bg-primary flex-1'>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <X color='white' size={30} />
          </TouchableOpacity>
          <Text className='font-medium text-white text-lg'>Order help</Text>
        </View>

        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <View className='flex-row justify-between'>
            <View>
              <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
              <Text className='text-3xl font-bold'>45-55 minutes</Text>
            </View>

            <Image
              source={{ uri: 'https://links.papareact.com/fls' }}
              className='h-20 w-20'
            />
          </View>

          <Progress.Bar indeterminate={true} height={6} color='#00CCBB' />

          <Text className='mt-3 text-gray-500'>
            Your order at {restaurant?.name} is being prepared
          </Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen
