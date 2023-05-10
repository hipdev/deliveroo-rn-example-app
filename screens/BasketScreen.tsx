import { useNavigation } from '@react-navigation/native'

import { XCircle } from 'lucide-react-native'
import React, { useMemo, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useBasketStore } from '../stores/basketStore'
import { useRestaurantStore } from '../stores/restaurantStore'

const BasketScreen = () => {
  const navigation = useNavigation()
  const { restaurant } = useRestaurantStore()
  const { items } = useBasketStore()
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

  useMemo(() => {
    const groupedItems = items.reduce((results: any, item) => {
      const id = item._id
      results[id] = [...(results[id] || []), item]
      return results
    }, {})

    setGroupedItemsInBasket(groupedItems)
  }, [items])

  console.log(restaurant, 'restaurant', groupedItemsInBasket)

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-primary bg-white shadow-xs'>
          <View>
            <Text className='text-lg font-bold text-center'>Basket</Text>
            <Text className='text-center text-gray-400'>{restaurant.name}</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className='rounded-full bg-gray-100 absolute top-3 right-5'
          >
            <XCircle className='text-primary' height={50} width={50} />
          </TouchableOpacity>
        </View>

        {/* Image */}

        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image
            source={{ uri: 'https://links.papareact.com/wru' }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />

          <Text className='flex-1'>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className='text-primary'>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Items in the basket */}
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen
