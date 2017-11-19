import React, { Component } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';
import { 
    Container, Header, Title, Content, Button, Left, Right, Body, Icon
} from 'native-base';

import CalcButton from './CalcButton';
import SubjectsList from './SubjectsList';

const MainView = props => (
  <Container>
    <Header>
      <Left style={{ maxWidth: 50 }}>
        <Button transparent onPress={props.showDrawer}>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title>CGPA Calculator</Title>
      </Body>
      <Right>
        <CalcButton />
      </Right>
    </Header>
    <Content>
      <SubjectsList />
    </Content>
  </Container>
);

export default MainView;

let backPressCount = 0;
let timeoutID = null;

BackHandler.addEventListener('hardwareBackPress', () => {
    if (++backPressCount > 1) {
        backPressCount = 0;
        clearTimeout(timeoutID);
        return false;
    }

    ToastAndroid.show('Press back again to exit app', ToastAndroid.SHORT);
    timeoutID = setTimeout(() => { backPressCount = 0; }, 3000);
    return true;
});

