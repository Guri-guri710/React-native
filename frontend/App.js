import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Text, TouchableOpacity } from 'react-native';
import HomeScreem from './screens/HomeScreem';
import TaskFormScreem from './screens/TaskFormScreem';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreem" component={HomeScreem} options={{
            headerStyle:{backgroundColor: '#222f3e'},
            headerTitleStyle:{ color:'#ffffff' },
            headerRight: () => (
              <TouchableOpacity>
                <Text style={{color:'#ffffff', padding:10}}>
                  New
                </Text>
              </TouchableOpacity>
            )
           
          }} />
          <Stack.Screen name="TaskFormScreem" component={TaskFormScreem} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
