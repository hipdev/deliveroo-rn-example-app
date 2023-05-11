import { ArrowRight } from 'lucide-react-native'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import RestaurantCard, { RestaurantCardProps } from './RestaurantCard'

type Props = {
  id: string
  title?: string
  description?: string
  featuredCategory: string
  restaurants?: RestaurantCardProps['restaurant'][]
}
const FeaturedRow = ({
  id,
  title,
  description,
  featuredCategory,
  restaurants,
}: Props) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between'>
        <Text className='text-lg font-bold'>{title}</Text>
        <ArrowRight className='text-primary' />
      </View>

      <Text className='text-xs text-gray-500'>{description}</Text>

      <ScrollView
        horizontal
        className='pt-4'
        showsHorizontalScrollIndicator={false}
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
