import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDown, Search, Sliders, User } from 'lucide-react-native'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

export default function HomeScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='bg-white pt-5'>
      <View className='flex-row pb-3 mx-4 items-center space-x-3'>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-7 w-7 bg-gray-300 rounded-full'
        />

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver now</Text>
          <Text className='font-bold text-xl'>
            Current location
            <ChevronDown color='#00CCBB' />
          </Text>
        </View>

        <User size={25} color='#00CCBB' />
      </View>

      {/* Search */}

      {/* some styles in the next View were not needed -- 43:10 video */}
      <View className='pb-2 mx-4 flex-row items-center space-x-3'>
        <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center'>
          <Search color='gray' size={20} />
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
            className='flex-1'
          />
        </View>
        <Sliders color='#00CCBB' />
      </View>

      {/* Body */}

      <ScrollView className='bg-gray-100 px-4 pt-5'>
        {/* Categories */}
        <Categories />

        {/* Featured rows */}

        <FeaturedRow
          id='123'
          title='Featured'
          description='Paid placements from our partners'
          featuredCategory='featured'
        />

        <FeaturedRow
          id='1234'
          title='Tasty Discounts'
          description="Everyone's been enjoying these juicy discounts"
          featuredCategory='discounts'
        />

        <FeaturedRow
          id='12345'
          title='offers near you!'
          description='Why not support your local restaurant tonight!'
          featuredCategory='offers'
        />
      </ScrollView>
    </SafeAreaView>
  )
}
