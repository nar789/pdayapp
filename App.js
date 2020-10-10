import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Provider as PaperProvider, BottomNavigation} from 'react-native-paper';

import ReqRoute from './screens/Request';
import HomeRoute from './screens/Home';
import SettingRoute from './screens/Settings';
import SugRoute from './screens/Suggest';

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'home', title: '커뮤니티', icon: 'chat-processing', color: '#efefef'},
    {key: 'req', title: '견적요청', icon: 'send', color: '#efefef'},
    {key: 'sug', title: '견적내역', icon: 'view-list', color: '#efefef'},
    {
      key: 'setting',
      title: '더보기',
      icon: 'dots-horizontal',
      color: '#efefef',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    req: ReqRoute,
    sug: SugRoute,
    setting: SettingRoute,
  });

  return (
    <PaperProvider>
      <BottomNavigation
        activeColor="#444455"
        inactiveColor="#aeaeae"
        barStyle={styles.BottomNavigation}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  BottomNavigation: {
    color: 'black',
  },
});

export default App;
