import React from 'react'

import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { formatCurrency } from 'react-native-format-currency'

import { useBasketStore } from '../stores/basketStore'

const Basket = () => {
  const { getTotal, items } = useBasketStore()
  const navigation = useNavigation()

  const [valueFormattedWithSymbol] = formatCurrency({
    amount: getTotal() || 0,
    code: 'GBP',
  })

  return (
    <View className='absolute bottom-10 z-20 w-full'>
      <TouchableOpacity className='mx-5 flex-row items-center space-x-1 rounded-lg bg-primary p-4'>
        <Text className='bg-[#01A296] px-2 py-1 text-lg font-extrabold text-white'>
          {items.length}
        </Text>
        <Text className='flex-1 text-center text-lg font-extrabold text-white'>
          View Basket
        </Text>
        <Text className='text-lg font-extrabold text-white'>
          {valueFormattedWithSymbol}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Basket
