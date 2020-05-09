import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HealthTipsScreen from '../screens/HealthTipsScreen'
import NutritionTips from '../screens/NutritionTips'
import FitnessTips from '../screens/FitnessTips'
import MentalHealthTips from '../screens/MentalHealthTips'
import HygieneTips from '../screens/HygieneTips'
const Stack = createStackNavigator()

export default function HealthStack() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name='Health Tips' component={HealthTipsScreen} options={{ title: 'Health Tips',headerTintColor:'#ffffff',headerStyle:{backgroundColor:'#0099cb'}}} />
        <Stack.Screen name='Nutrition Tips' component={NutritionTips} options={{ title: 'Nutrition Tips',headerTitleAlign:'center' ,headerTintColor:'#ffffff',headerStyle:{backgroundColor:'#0099cb'}}} />
        <Stack.Screen name='Fitness Tips' component={FitnessTips} options={{ title: 'Fitness Tips',headerTitleAlign:'center' ,headerTintColor:'#ffffff',headerStyle:{backgroundColor:'#0099cb'}}} />
        <Stack.Screen name='Mental Health Tips' component={MentalHealthTips} options={{ title: 'Mental Health Tips',headerTitleAlign:'center' ,headerTintColor:'#ffffff',headerStyle:{backgroundColor:'#0099cb'}}} />
        <Stack.Screen name='Hygiene Tips' component={HygieneTips} options={{ title: 'Hygiene Tips',headerTitleAlign:'center' ,headerTintColor:'#ffffff',headerStyle:{backgroundColor:'#0099cb'}}} />
      </Stack.Navigator>
  
  )
}

