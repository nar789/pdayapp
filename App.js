import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Provider as PaperProvider, BottomNavigation} from 'react-native-paper';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabs from './components/BottomTabs';
import RequestDetail from './screens/RequestDetail';
import NewRequest from './screens/NewRequest';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RequestDetail"
            component={RequestDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NewRequest"
            component={NewRequest}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
