import React, {useState} from 'react';
import {StyleSheet, ScrollView, RefreshControl} from 'react-native';
import {Appbar, FAB, Caption} from 'react-native-paper';
import {Block} from 'galio-framework';
import RequestListItem from '../components/RequestListItem';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const Request = (props) => {
  const [noContent, setNoContent] = useState(false);
  const [fabVisible, setFabVisible] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const DisplayNoContent = () => {
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

  function RenderAppBar() {
    return (
      <Appbar.Header style={styles.AppBar}>
        <Appbar.Content title="견적요청" color="#444455" />
      </Appbar.Header>
    );
  }
  function RenderFAB(props) {
    return (
      <FAB
        color="white"
        visible={fabVisible}
        style={styles.fab}
        large
        icon="plus"
        onPress={() => {
          props.navigation.navigate('NewRequest');
        }}
      />
    );
  }

  function RenderList(props) {
    let list = [];
    for (var i = 0; i < 10; i++) {
      list.push(i);
    }
    return list.map((i) => {
      return <RequestListItem key={i} navigation={props.nav} />;
    });
  }

  function renderListScrollView(nav) {
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
        <RenderList nav={nav} />
        <Block height={50} flex center>
          <Caption style={{marginTop: 10}}>더 이상 목록이 없습니다.</Caption>
        </Block>
      </ScrollView>
    );
  }

  return (
    <Block flex>
      <RenderAppBar />
      {renderListScrollView(props.navigation)}
      <DisplayNoContent />
      <RenderFAB navigation={props.navigation} />
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
