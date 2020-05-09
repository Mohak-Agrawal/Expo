import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NewsStack from './stacks/NewsStack';
import PrecautionsStack from './stacks/PrecautionsStack';
import HealthStack from './stacks/HealthStack';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#0099cb"
      inactiveColor="grey"
      barStyle={{ backgroundColor: 'white' }}
      >
       <Tab.Screen name="Covid Cases" component={NewsStack} options={{
          tabBarLabel: 'Covid-19 Cases',
          tabBarIcon:({color})=>(
            <Icon name ="dns" color ={color} size={22}/>
          )
        }}/>
        <Tab.Screen name="Precautions" component={PrecautionsStack} options={{
          tabBarLabel: 'Precautions',
          tabBarIcon:({color})=>(
            <Icon name ="local-pharmacy" color ={color} size={22}/>
          )
        }}/>
        <Tab.Screen name="Health_tips" component={HealthStack} options={{
          tabBarLabel: 'Health Tips',
          tabBarIcon:({color})=>(
            <Icon name ="spa" color ={color} size={22}/>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
