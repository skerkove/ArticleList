import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Detail from '../screens/Detail'
import RowDetails from '../screens/RowDetails'
import ToDo from '../screens/ToDo'



const Stack = createStackNavigator()

function StackNavigator() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: 'white',
          headerBackTitleVisible: false
        }}
        headerMode='float'>

        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home Screen' }}
        />

        <Stack.Screen
          name='Detail'
          component={Detail}
          options={({ route }) => ({
            title: route.params.item.name
          })}
        />
        
        <Stack.Screen 
        name='RowDetails'
        component={RowDetails}
        options={{ title: 'Row Details' }}
        />

        <Stack.Screen 
        name='ToDo'
        component={ToDo}
        options={{ title: 'To Do List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator