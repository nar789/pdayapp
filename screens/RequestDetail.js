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

const RequestDetail = ({navigation}) => {
  return (
    <Block>
      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="이정헌 ♥ 유서연님의 웨딩" />
      </Appbar.Header>
      <Block>
        <Text>웨딩정보</Text>
        <Text>받은견적리스트</Text>
      </Block>
    </Block>
  );
};

export default RequestDetail;
