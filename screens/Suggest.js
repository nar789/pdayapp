import React from 'react';
import {Block} from 'galio-framework';
import {ScrollView, RefreshControl, StyleSheet} from 'react-native';
import {Appbar, Caption} from 'react-native-paper';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const Suggest = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <Block flex>
      <Appbar.Header style={styles.AppBar}>
        <Appbar.Content title="견적내역" color="#444455" />
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
    </Block>
  );
};

export default Suggest;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSize: {
    fontSize: 16,
  },
  BottomNavigation: {
    color: 'black',
  },
  AppBar: {
    backgroundColor: 'white',
  },
});
