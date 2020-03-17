import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TickingClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       time: new Date().toLocaleString(),
     //var: mil = new Date().getMilliseconds()
    };
  }
 
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString(),
     //var: mil = new Date().getMilliseconds()
    });
  }
  render() {
    return (
      <View>
        <Text style={styles.text}>
        {this.state.time}.
      </Text>
    </View>
    );
  }
}

export default TickingClock;

const styles = StyleSheet.create({
  text:{
    flex: 0,
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    position: "absolute",
    marginTop: 70
  },

  container:{
    justifyContent: "center",
    alignItems: "center",
  },
})