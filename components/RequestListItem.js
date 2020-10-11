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

const RequestListItem = (props) => {
  return (
    <Card
      onPress={() => {
        props.navigation.navigate('RequestDetail');
        //console.log(props.navigation);
      }}
      style={{padding: 10, marginTop: 10, marginBottom: 10}}>
      <Caption>견적받는 중...</Caption>
      <Card.Content style={{height: 110}}>
        <Block flex row>
          <Block flex left>
            <Block flex row style={{marginTop: 10}}>
              <Title style={{margin: 0, padding: 0}}>이정헌</Title>
              <Entypo name="heart" color="red" style={{marginTop: 10}} />
              <Title style={{marginLeft: 0, padding: 0}}>유서연님의 웨딩</Title>
            </Block>
          </Block>

          <Block flex right>
            <Caption>남은 시간</Caption>
            <Title style={{marginTop: -5}}>23:59:59</Title>
          </Block>
        </Block>

        <Block flex row style={{marginTop: 5}}>
          <Block flex left>
            <Text>예식정보</Text>
            <Block row>
              <EvilIcons name="calendar" style={{marginTop: 5}} color="gray" />
              <Caption> 2020.12.25</Caption>
            </Block>
            <Block row>
              <Ionicons
                name="time-outline"
                style={{marginTop: -3}}
                color="gray"
              />
              <Caption style={{marginTop: -5}}> 오후 1시</Caption>
            </Block>
            <Block row>
              <EvilIcons name="location" color="gray" />
              <Caption style={{marginTop: -5}}> 서울 청담웨딩홀</Caption>
            </Block>
          </Block>

          <Block flex right>
            <Caption>받은 견적</Caption>

            <Title style={{fontSize: 30}}>123 건</Title>
          </Block>
        </Block>
      </Card.Content>
    </Card>
  );
};

export default RequestListItem;
