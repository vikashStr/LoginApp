import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Amplify from 'aws-amplify';
import awsConfig from './src/aws-exports';

Amplify.configure(awsConfig);

import {withAuthenticator} from 'aws-amplify-react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Our favorite Dock APP</Text>
        <Text>Athlete List</Text>
        <Text>Athlete 1</Text>
        <Text>Athlete 2</Text>
        <Text>Athlete 3</Text>
      </View>
    );
  }
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
