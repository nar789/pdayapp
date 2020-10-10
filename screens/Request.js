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
import {Block, Icon} from 'galio-framework';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const Request = () => {
  const [noContent, setNoContent] = useState(false);
  const [fabVisible, setFabVisible] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const displayNoContent = () => {
    if (noContent) {
      return (
        <Block flex center row>
          <Caption style={styles.textSize}>
            내역이 없습니다. 견적을 요청해보세요.
          </Caption>
        </Block>
      );
    } else {
      return null;
    }
  };

  function renderAppBar() {
    return (
      <Appbar.Header style={styles.AppBar}>
        <Appbar.Content title="견적요청" color="#444455" />
      </Appbar.Header>
    );
  }

  function renderFAB() {
    return (
      <FAB
        color="white"
        visible={fabVisible}
        style={styles.fab}
        large
        icon="plus"
        onPress={() => {}}
      />
    );
  }

  function renderItem() {
    return (
      <Card
        onPress={() => {}}
        style={{padding: 10, marginTop: 10, marginBottom: 10}}>
        <Caption>견적받는 중...</Caption>
        <Card.Content style={{height: 110}}>
          <Block flex row>
            <Block flex left>
              <Block flex row style={{marginTop: 10}}>
                <Title style={{margin: 0, padding: 0}}>이정헌</Title>
                <Entypo name="heart" color="red" style={{marginTop: 10}} />
                <Title style={{marginLeft: 0, padding: 0}}>
                  유서연님의 웨딩
                </Title>
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
                <EvilIcons
                  name="calendar"
                  style={{marginTop: 5}}
                  color="gray"
                />
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
              <Title style={{fontSize: 30}}>0건</Title>
            </Block>
          </Block>
        </Card.Content>
      </Card>
    );
  }

  function renderList() {
    let list = [];
    for (var i = 0; i < 3; i++) {
      list.push(i);
    }
    return list.map((i) => {
      return renderItem();
    });
  }

  function renderListScrollView() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onScroll={() => {
          setFabVisible(false);
        }}
        onMomentumScrollEnd={() => {
          setFabVisible(true);
        }}>
        {renderList()}
        <Block height={50} flex center>
          <Caption style={{marginTop: 10}}>더 이상 목록이 없습니다.</Caption>
        </Block>
      </ScrollView>
    );
  }

  return (
    <Block flex>
      {renderAppBar()}
      {renderListScrollView()}
      {displayNoContent()}
      {renderFAB()}
    </Block>
  );
};

export default Request;

const styles = StyleSheet.create({
  textSize: {
    fontSize: 16,
  },
  fab: {
    backgroundColor: '#444455',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  AppBar: {
    backgroundColor: 'white',
  },
});
