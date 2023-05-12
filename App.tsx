import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import 'react-native-url-polyfill/auto'

import { RestaurantFixed } from './components/RestaurantCard'
import BasketScreen from './screens/BasketScreen'
import DeliveryScreen from './screens/DeliveryScreen'
import HomeScreen from './screens/HomeScreen'
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import RestaurantScreen from './screens/RestaurantScreen'

const Stack = createNativeStackNavigator()

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined
      Restaurant: RestaurantFixed
      Basket: undefined
      PreparingOrderScreen: undefined
      Delivery: undefined
    }
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Restaurant' component={RestaurantScreen} />
        <Stack.Screen
          name='Basket'
          component={BasketScreen}
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='PreparingOrderScreen'
          component={PreparingOrderScreen}
          options={{ presentation: 'fullScreenModal', headerShown: false }}
        />
        <Stack.Screen
          name='Delivery'
          component={DeliveryScreen}
          options={{ presentation: 'fullScreenModal', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
