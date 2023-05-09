import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Dish } from '../sanity/types/schema'

import { formatCurrency } from 'react-native-format-currency'
import { urlFor } from '../lib/sanity'
import { MinusCircle, PlusCircle } from 'lucide-react-native'
import { useBasketStore } from '../stores/basketStore'

const DishRow = ({ dish }: { dish: Dish }) => {
  const { items, addItem, removeItem } = useBasketStore()

  const [isPressed, setIsPressed] = useState(false)
  // This is a great library to handle currency formats
  const [valueFormattedWithSymbol] = formatCurrency({
    amount: dish.price || 0,
    code: 'GBP',
  })

  const totalItems = items.filter((item) => item._id == dish._id).length
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && ' border-b-0'
        }`}
      >
        <View className='flex-row'>
          <View className='flex-1 pr-3'>
            <Text className='text-lg mb-1'>{dish.name}</Text>
            <Text className='text-gray-400'>{dish.short_description}</Text>
            <Text className='text-gray-400 mt-2'>
              {valueFormattedWithSymbol}
            </Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: '#f3f3f4',
              }}
              source={{ uri: urlFor(dish.image).url() }}
              className='h-20 w-20 bg-gray-300 p-4'
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className='bg-white px-4'>
          <View className='flex-row items-center space-x-2 pb-3'>
            <TouchableOpacity
              disabled={!totalItems}
              onPress={() => {
                if (totalItems == 0) return

                removeItem(dish)
              }}
            >
              <MinusCircle
                size={30}
                className={totalItems == 0 ? 'text-gray-400' : 'text-primary'}
              />
            </TouchableOpacity>

            <Text>{items.filter((item) => item._id == dish._id).length}</Text>

            <TouchableOpacity onPress={() => addItem(dish)}>
              <PlusCircle size={30} className='text-primary' />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow
