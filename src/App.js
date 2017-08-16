import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, TabNavigator  } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        
        <Button
          onPress={() => navigate('Chat', { user: 'an user' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class RecentChatsScreen extends React.Component {
    render() {
        return (
            <View>
              <Text>Hello, Chat App!</Text>
              
              <Button
                onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
                title="Chat with Lucy"
              />
            </View>
          );
    }
  }
  
  class AllContactsScreen extends React.Component {
    render() {
        return (
            <View>
              <Text>Hello, Chat App!</Text>
              
              <Button
                onPress={() => this.props.navigation.navigate('Chat', { user: 'Jane' })}
                title="Chat with Jane"
              />
            </View>
          );
    }
  }
  
  const MainScreenNavigator = TabNavigator({
    Recent: { screen: RecentChatsScreen },
    All: { screen: AllContactsScreen },
  });

  MainScreenNavigator.navigationOptions = {
    title: 'My Chats',
  };

class ChatScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) => {
        const {state, setParams} = navigation;
        const isInfo = state.params.mode === 'info';
        const {user} = state.params;
        return {
          title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
          headerRight: (
            <Button
              title={isInfo ? 'Done' : `${user}'s info`}
              onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
            />
          ),
        };
    };
    render() {
      // The screen's current route is passed in to `props.navigation.state`:
      const { params } = this.props.navigation.state;
      return (
        <View>
          <Text>Chat with {params.user}</Text>
        </View>
      );
    }
  }

const navigationStack = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('navigationStack', () => navigationStack);
