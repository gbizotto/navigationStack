import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class AllContactsScreen extends React.Component {
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