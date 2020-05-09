import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import NewsScreen from '../screens/NewsScreen'
import WorldWideCasesScreen from '../screens/WorldWideCasesScreen'
import IndiaCasesScreen from '../screens/IndiaCasesScreen'
const Stack = createStackNavigator()

export default function NewsStack() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name='News' component={NewsScreen} options={{ title: 'Covid-19 Cases',headerTintColor:'#ffffff',headerStyle:{backgroundColor:'#0099cb',elevation:30}}} />
        <Stack.Screen name='WorldWideCases' component={WorldWideCasesScreen} options={{ title: 'Worldwide Cases',headerTitleAlign:'center' ,headerTintColor:'#ffffff',headerStyle:{backgroundColor:'#0099cb'}}}/>
        <Stack.Screen name='IndiaCasesScreen' component={IndiaCasesScreen} options={{ title: 'Indian cases',headerTitleAlign:'center' ,headerTintColor:'#ffffff',headerStyle:{backgroundColor:'#0099cb'}}}/>
      </Stack.Navigator>
  
  )
}

