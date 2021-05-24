import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import InstagramScreen from './screens/InstagramScreen';
import FaceBookScreen from './screens/FaceBookScreen';

export default class App extends React.Component {
  render(){
  return (
      <AppContainer />
  );
}
}

const TabNavigator = createBottomTabNavigator({
  FaceBook: FaceBookScreen,
  Instagram: InstagramScreen,
});

const AppContainer = createAppContainer(TabNavigator);