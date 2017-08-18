import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, TabNavigator  } from 'react-navigation';

import ChatScreen from './components/ChatScreen';
import HomeScreen from './components/HomeScreen';
import RecentChatsScreen from './components/RecentChatsScreen';
import AllContactsScreen from './components/AllContactsScreen';

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const navigationStack = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('navigationStack', () => navigationStack);
