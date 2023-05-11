import { useNavigation } from '@react-navigation/native'

import { XCircle } from 'lucide-react-native'
import React, { useMemo, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { formatCurrency } from 'react-native-format-currency'
import { SafeAreaView } from 'react-native-safe-area-context'

import { urlFor } from '../lib/sanity'
import { Dish } from '../sanity/types/schema'
import { useBasketStore } from '../stores/basketStore'
import { useRestaurantStore } from '../stores/restaurantStore'

type GroupedItems = { [key: string]: Dish[] }

const BasketScreen = () => {
  const navigation = useNavigation()
  const { restaurant } = useRestaurantStore()
  const { removeItem } = useBasketStore()
  const { items, getTotal } = useBasketStore()
  const [groupedItemsInBasket, setGroupedItemsInBasket] =
    useState<GroupedItems>({})

  useMemo(() => {
    const groupedItems = items.reduce((results: GroupedItems, item) => {
      const id = item._id
      results[id] = [...(results[id] || []), item]
      return results
    }, {})

    setGroupedItemsInBasket(groupedItems)
  }, [items])

  const [total] = formatCurrency({
    amount: getTotal() || 0,
    code: 'GBP',
  })

  const [deliveryFee] = formatCurrency({
    amount: 2500,
    code: 'GBP',
  })

  const [orderTotal] = formatCurrency({
    amount: getTotal() + 2500 || 0,
    code: 'GBP',
  })

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
            <XCircle className='text-primary' size={30} />
          </TouchableOpacity>
        </View>

        {/* Header basket */}

        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-4'>
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

        <ScrollView className='divide-y divide-gray-200'>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => {
            return (
              <View
                key={key}
                className='flex-row items-center space-x-3 bg-white py-2 px-5'
              >
                <Text className='text-primary'>{items.length} x</Text>
                <Image
                  source={{ uri: urlFor(items[0]?.image).url() }}
                  className='h-12 w-12 rounded-full'
                />
                <Text className='flex-1'>{items[0]?.name}</Text>

                <TouchableOpacity onPress={() => removeItem(items[0])}>
                  <Text className='text-primary text-xs'>Remove</Text>
                </TouchableOpacity>
              </View>
            )
          })}

          {/* Repeat the entries, I don't have to much products lol */}
          {Object.entries(groupedItemsInBasket).map(([key, items]) => {
            return (
              <View
                key={key}
                className='flex-row items-center space-x-3 bg-white py-2 px-5'
              >
                <Text className='text-primary'>{items.length} x</Text>
                <Image
                  source={{ uri: urlFor(items[0]?.image).url() }}
                  className='h-12 w-12 rounded-full'
                />
                <Text className='flex-1'>{items[0]?.name}</Text>

                <TouchableOpacity onPress={() => removeItem(items[0])}>
                  <Text className='text-primary text-xs'>Remove</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>

        <View className='p-5 bg-white mt-4 space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subtotal</Text>
            <Text className='text-gray-400'>{total}</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>{deliveryFee}</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className=''>Delivery Fee</Text>
            <Text className='font-extrabold'>{orderTotal}</Text>
          </View>

          <TouchableOpacity className='rounded-lg bg-primary p-4'>
            <Text className='text-center text-white font-bold text-lg'>
              Place order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen
