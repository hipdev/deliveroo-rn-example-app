import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRestaurantStore } from '../stores/restaurantStore'

const BasketScreen = () => {
  const navigation = useNavigation()

  const { restaurant } = useRestaurantStore()

  console.log(restaurant, 'restaurant')

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen
