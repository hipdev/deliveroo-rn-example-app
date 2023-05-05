import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import 'react-native-url-polyfill/auto'

import HomeScreen from './screens/HomeScreen'
import RestaurantScreen from './screens/RestaurantScreen'
import { RestaurantCard } from './components/RestaurantCard'

const Stack = createNativeStackNavigator()

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined
      Restaurant: RestaurantCard
    }
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Restaurant' component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
