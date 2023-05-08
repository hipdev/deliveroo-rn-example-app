import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dish } from '../sanity/types/schema'

import { formatCurrency } from 'react-native-format-currency'

const DishRow = (dish: Dish) => {
  const formattedPrice = formatCurrency({
    amount: dish.price || 0,
    code: 'GBP',
  })
  return (
    <TouchableOpacity>
      <View>
        <Text>{dish.name}</Text>
        <Text>{dish.short_description}</Text>
        <Text>{formattedPrice}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default DishRow
