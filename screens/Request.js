import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Appbar, List, FAB, Text} from 'react-native-paper';
import {Block} from 'galio-framework';

const Request = () => {
  const [noContent, setNoContent] = useState(false);

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

  return (
    <Block flex>
      <Appbar.Header style={styles.AppBar}>
        <Appbar.Content title="견적요청" color="#444455" />
      </Appbar.Header>

      <List.Section>
        <List.Subheader>Some title</List.Subheader>
        <List.Item
          title="First Item"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          title="Second Item"
          left={() => <List.Icon color="#000" icon="folder" />}
        />
      </List.Section>
      {displayNoContent()}
      <FAB
        color="white"
        style={styles.fab}
        large
        icon="plus"
        onPress={() => {}}
      />
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
