import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRight } from 'lucide-react-native'
import RestaurantCards from './RestaurantCards'

type Props = {
  id: string
  title: string
  description: string
  featuredCategory: string
}

const FeaturedRow = ({ id, title, description, featuredCategory }: Props) => {
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
        <RestaurantCards
          id='123'
          imgUrl='https://links.papareact.com/gn7'
          title='Yo! Sushi'
          rating={4.5}
          genre='Japanese'
          address='123 Main St'
          short_description='This is a short description'
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
