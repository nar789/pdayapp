import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import ReqRoute from '../screens/Request';
import HomeRoute from '../screens/Home';
import SettingRoute from '../screens/Settings';
import SugRoute from '../screens/Suggest';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      activeColor="#444455"
      inactiveColor="#aeaeae"
      barStyle={styles.BottomNavigation}>
      <Tab.Screen
        name="home"
        component={HomeRoute}
        options={{
          tabBarLabel: '커뮤니티',
          tabBarIcon: ({color}) => {
            return (
              <MaterialCommunityIcons
                name="chat-processing"
                color={color}
                size={20}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="req"
        component={ReqRoute}
        options={{
          tabBarLabel: '견적요청',
          tabBarIcon: ({color}) => {
            return (
              <MaterialCommunityIcons name="send" color={color} size={20} />
            );
          },
        }}
      />
      <Tab.Screen
        name="sug"
        component={SugRoute}
        options={{
          tabBarLabel: '견적내역',
          tabBarIcon: ({color}) => {
            return (
              <MaterialCommunityIcons
                name="view-list"
                color={color}
                size={20}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="setting"
        component={SettingRoute}
        options={{
          tabBarLabel: '더보기',
          tabBarIcon: ({color}) => {
            return (
              <MaterialCommunityIcons
                name="dots-horizontal"
                color={color}
                size={20}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  BottomNavigation: {
    backgroundColor: '#efefef',
  },
});
