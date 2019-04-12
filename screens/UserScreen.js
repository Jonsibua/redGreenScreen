import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetAllUser from '../requests/getAllUser'; 

class UserScreen extends React.Component {

  render() {
    return (
      <View style = {styles.container}>
        <Text> Random Get Request: </Text>
            <GetAllUser />
      </View>
   )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default UserScreen