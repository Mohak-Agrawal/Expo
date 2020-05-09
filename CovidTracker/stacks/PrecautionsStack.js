import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PrecautionsScreen from '../screens/PrecautionsScreen'
const Stack = createStackNavigator()

export default function PrecautionsStack() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name='Precautions' component={PrecautionsScreen} options={{ title: 'Precautions',headerTintColor:'#ffffff',headerStyle:{backgroundColor:'#0099cb',shadowColor:'#333'}}} />
       
      </Stack.Navigator>
  
  )
}

