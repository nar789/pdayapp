import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {
  Provider as PaperProvider,
  Button,
  Text,
  Caption,
  Title,
  Appbar,
  BottomNavigation,
  FAB,
} from 'react-native-paper';
import {Block} from 'galio-framework';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const HomeRoute = () => {
  return (
    <PaperProvider>
      <StatusBar backgroundColor="white" />
      <Appbar.Header style={styles.AppBar}>
        <Appbar.Content title="내돈내혼" />
      </Appbar.Header>
      <Block flex center row>
        <Caption style={styles.textSize}>웨딩플래너플랫폼 내돈내혼</Caption>
      </Block>
    </PaperProvider>
  );
};
const ReqRoute = () => {
  return (
    <PaperProvider>
      <StatusBar backgroundColor="white" />
      <Appbar.Header style={styles.AppBar}>
        <Appbar.Content title="견적요청" />
      </Appbar.Header>
      <Block flex center row>
        <Caption style={styles.textSize}>
          내역이 없습니다. 견적을 요청해보세요.
        </Caption>
      </Block>
      <FAB
        color="white"
        style={styles.fab}
        large
        icon="plus"
        onPress={() => {}}
      />
    </PaperProvider>
  );
};
const SugRoute = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <PaperProvider>
      <StatusBar backgroundColor="white" />
      <Appbar.Header style={styles.AppBar}>
        <Appbar.Content title="견적내역" />
      </Appbar.Header>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Caption style={styles.textSize}>
          내역이 없습니다. 위로 당겨서 새로고침
        </Caption>
      </ScrollView>
    </PaperProvider>
  );
};
const SettingRoute = () => {
  return (
    <PaperProvider>
      <StatusBar backgroundColor="white" />
      <Appbar.Header style={styles.AppBar}>
        <Appbar.Content title="설정" />
      </Appbar.Header>
      <Block flex center row>
        <Caption style={styles.textSize}>웨딩플래너플랫폼 내돈내혼</Caption>
      </Block>
    </PaperProvider>
  );
};

const App = () => {
  const [cnt, setCnt] = useState(0);

  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'home', title: '커뮤니티', icon: 'chat-processing', color: '#3F51B5'},
    {key: 'req', title: '견적요청', icon: 'send', color: '#009688'},
    {key: 'sug', title: '견적내역', icon: 'email-receive', color: '#795548'},
    {key: 'setting', title: '설정', icon: 'dots-horizontal', color: '#607D8B'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    req: ReqRoute,
    sug: SugRoute,
    setting: SettingRoute,
  });

  return (
    <BottomNavigation
      barStyle={styles.BottomNavigation}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />

    /*
    <View>
      <StatusBar backgroundColor="white" />
      <Text>cnt : {cnt}</Text>
      <Button title="asdfasdf" onPress={() => setCnt(cnt + 10)} />
    </View>*/
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSize: {
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  BottomNavigation: {
    color: 'black',
  },
  AppBar: {
    backgroundColor: 'white',
  },
  Button: {
    margin: 10,
  },
});

export default App;
