import React, {useState} from 'react';
import {StyleSheet, ScrollView, RefreshControl} from 'react-native';
import {
  Appbar,
  List,
  FAB,
  Text,
  Avatar,
  Button,
  Caption,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import {Block} from 'galio-framework';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const NewRequest = ({navigation}) => {
  return (
    <Block>
      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="새 견적 요청" />
      </Appbar.Header>
      <Block>
        <Text>웨딩정보 입력</Text>
        <Text>선호 취향 스드매 입력</Text>
      </Block>
    </Block>
  );
};

export default NewRequest;
