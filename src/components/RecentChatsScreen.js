import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class RecentChatsScreen extends React.Component {
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