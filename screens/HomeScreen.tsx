import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDown, Search, Sliders, User } from 'lucide-react-native'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../lib/sanity'

import { Featured } from '../sanity/types/schema'

export default function HomeScreen() {
  const navigation = useNavigation()
  const [featuredCategories, setFeaturedCategories] = useState<
    undefined | Featured[]
  >()

  // I changed this query to only use one for all the children components
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured"] {
          ...,
          restaurants[]-> {
            ...,
            dishes[]->,
            type-> {
              name
            }
          }
        }
    `
      )
      .then((data) => setFeaturedCategories(data))
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='bg-white pt-5 flex-1 pb-10'>
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
            <ChevronDown className='text-primary' />
          </Text>
        </View>

        <User size={25} className='text-primary' />
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
            placeholderTextColor='#111'
          />
        </View>
        <Sliders className='text-primary' />
      </View>

      {/* Body */}

      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured rows */}

        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category?.short_description}
            featuredCategory='featured'
            restaurants={category?.restaurants as any}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
