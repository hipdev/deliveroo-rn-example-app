import { useNavigation } from '@react-navigation/native'

import React, { useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import * as Progress from 'react-native-progress'
import Animated, { SlideInDown } from 'react-native-reanimated'

const PreparingOrderScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 4000)
  }, [])

  return (
    <SafeAreaView className='bg-primary flex-1 justify-center items-center'>
      <Animated.Image
        entering={SlideInDown}
        source={require('../assets/delivery.gif')}
        className='h-96 w-96'
      />

      <Text className='text-lg my-10 text-white font-bold text-center px-4'>
        Waiting for restaurant to accept your order
      </Text>
      <Progress.Circle size={60} indeterminate={true} color='white' />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen
