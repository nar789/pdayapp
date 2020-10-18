import React, {useState} from 'react';
import {StyleSheet, ScrollView, RefreshControl} from 'react-native';
import {Appbar, Text} from 'react-native-paper';
import {Block} from 'galio-framework';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';

const PAGES = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5'];

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#787878',
  separatorUnFinishedColor: '#232323',
  stepIndicatorFinishedColor: '#787878',
  stepIndicatorUnFinishedColor: '#232323',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#232323',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#787878',
  labelColor: '#787878',
  labelSize: 12,
  currentStepLabelColor: '#232323',
  stepStrokeCurrentColor: '#232323',
};

const NewRequest = ({navigation}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const onStepPress = (position) => {
    setCurrentPage(position);
  };

  const renderLabel = ({position, label, currentPosition}) => {
    return (
      <Text
        style={
          position === currentPosition
            ? styles.stepLabelSelected
            : styles.stepLabel
        }>
        {label}
      </Text>
    );
  };

  return (
    <Block flex>
      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="새 견적 요청" />
      </Appbar.Header>
      <Block flex>
        <Block flex style={styles.stepIndicator}>
          <StepIndicator
            customStyles={firstIndicatorStyles}
            currentPosition={currentPage}
            labels={['스튜디오', '드레스', '메이크업', '본식스냅', '예식정보']}
            onPress={onStepPress}
          />
        </Block>
        <Block flex>
          <Swiper
            index={currentPage}
            autoplay={false}
            showsButtons={true}
            onIndexChanged={(index) =>
              setTimeout(() => {
                setCurrentPage(index);
              }, 50)
            }>
            <Block flex center key={0}>
              <Text>스튜디오</Text>
            </Block>
            <Block flex center key={1}>
              <Text>드레스</Text>
            </Block>
            <Block flex center key={2}>
              <Text>메이크업</Text>
            </Block>
            <Block flex center key={3}>
              <Text>본식스냅</Text>
            </Block>
            <Block flex center key={4}>
              <Text>예식정보</Text>
            </Block>
          </Swiper>
        </Block>
      </Block>
    </Block>
  );
};

export default NewRequest;

const styles = StyleSheet.create({
  stepIndicator: {
    marginVertical: 50,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#4aae4f',
  },
});
