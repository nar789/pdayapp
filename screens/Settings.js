import React from 'react';
import {Block} from 'galio-framework';
import {StyleSheet} from 'react-native';
import {Appbar, Caption} from 'react-native-paper';

const Settings = () => {
  return (
    <Block flex>
      <Appbar.Header style={styles.AppBar}>
        <Appbar.Content title="더보기" color="#444455" />
      </Appbar.Header>
      <Block flex center row>
        <Caption style={styles.textSize}>웨딩플래너플랫폼 내돈내혼</Caption>
      </Block>
    </Block>
  );
};

export default Settings;

const styles = StyleSheet.create({
  textSize: {
    fontSize: 16,
  },
  AppBar: {
    backgroundColor: 'white',
  },
});
