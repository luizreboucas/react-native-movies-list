import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from './screens/Home'
import Details from './screens/Details'

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Details' component={Details}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
  
  
}