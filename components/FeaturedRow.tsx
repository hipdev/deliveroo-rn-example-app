import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRight } from 'lucide-react-native'
import { Restaurant, SanityKeyedReference } from '../sanity/types/schema'
import RestaurantCard from './RestaurantCard'

type Props = {
  id: string
  title?: string
  description?: string
  featuredCategory: string
  restaurants?: Restaurant[]
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
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRight className='text-primary' />
      </View>

      <Text className='text-xs text-gray-500'>{description}</Text>

      <ScrollView
        horizontal
        className='pt-4'
        showsHorizontalScrollIndicator={false}
      >
        {restaurants?.map((restaurant: Restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant?.name}
            rating={restaurant.rating}
            genre='Japanese'
            address={restaurant?.address}
            short_description={restaurant?.short_description}
            dishes={restaurant?.dishes as any}
            long={20}
            lat={0}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
