import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import Animated, { SlideInDown, SlideInUp } from 'react-native-reanimated'

const PreparingOrderScreen = () => {
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
    </SafeAreaView>
  )
}

export default PreparingOrderScreen
