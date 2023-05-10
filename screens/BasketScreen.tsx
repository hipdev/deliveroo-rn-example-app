import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRestaurantStore } from '../stores/restaurantStore'
import { useBasketStore } from '../stores/basketStore'

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
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen
