import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

let getColor = (isGreen) => {
  return (isGreen ? "#0F0" : "#F00");
}

let getBtnTitle = (isGreen) => {
  const standard = "Click here to change background color to";
  return (isGreen ? `${standard} green` : `${standard} red`);
}

class BlueRedScreen extends React.Component {

    static navigationOptions = {
      title: 'BlueRedScreen',
    };

    constructor(props) {
      super(props)
  
      this.onClick = this.onClick.bind(this);
  
      this.state = {
        isGreen: true,
        backgroundColor: getColor(this.isGreen),
      };
    }
  
    onClick() {
      this.setState(previousState => ({ isGreen: !previousState.isGreen }));
      this.setState({ backgroundColor: getColor(this.state.isGreen) });
    }
  
    render() {
      return (
        <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
          <View style={styles.button}>
            <Button
              onPress={this.onClick}
              title={getBtnTitle(this.state.isGreen)}
              color="black"
            />
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: getColor(true)
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white'
    }
  });

  export default BlueRedScreen