import { useNavigation } from '@react-navigation/native'

import { PhoneForwarded, X } from 'lucide-react-native'
import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Progress from 'react-native-progress'

import { useRestaurantStore } from '../stores/restaurantStore'

const DeliveryScreen = () => {
  const navigation = useNavigation()
  const { restaurant } = useRestaurantStore()

  return (
    <View className='bg-primary flex-1'>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <X color='white' size={30} />
          </TouchableOpacity>
          <Text className='font-medium text-white text-lg'>Order help</Text>
        </View>

        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <View className='flex-row justify-between'>
            <View>
              <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
              <Text className='text-3xl font-bold'>45-55 minutes</Text>
            </View>

            <Image
              source={{ uri: 'https://links.papareact.com/fls' }}
              className='h-20 w-20'
            />
          </View>

          <Progress.Bar indeterminate={true} height={6} color='#00CCBB' />

          <Text className='mt-3 text-gray-500'>
            Your order at {restaurant?.name} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className='flex-1 -mt-10'
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title={restaurant?.name}
          description={restaurant?.short_description}
          identifier='origin'
          pinColor='#00CCBB'
        />
      </MapView>

      <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
        />
        <View className='flex-1'>
          <Text className='text-lg'>Julián David</Text>
          <Text className='text-gray-400'>Your Rider</Text>
        </View>
        <View className='flex-row space-x-2 items-center'>
          <PhoneForwarded className='text-primary' />
          <Text className='text-primary text-lg mr-5 font-bold'>Call</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen
