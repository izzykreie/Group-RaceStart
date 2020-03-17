import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  AppRegistry,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class state extends Component {
constructor(props) {
  super(props);
  this.state = {
      username: "",
      password: ""
    };
  }
  handleUsername = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };
}



class Login extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>RaceStart</Text>
        <TextInput
          style={styles.loginBar}
          placeholder="username"
          label="username"
          name="username"
          autoCapitalize="none"
          autoCorect={false}
          returnKeyType="next"
          placeholderTextColor="grey"
          //onSubmitEditing={() => this.password.focus()}
          onChangeText={this.handleUsername}
        />
        <TextInput
          style={styles.loginBar}
          placeholder="password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          //ref={input => (this.password = input)}
          onChangeText={this.handlePassword}
        />
       
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>New User</Text>
        </TouchableOpacity>
      </View>

      
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66616f',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  loginBar: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey',
    textAlign: 'center',
  },
  buttonLogin: {
    width: 300,
    borderRadius: 25,
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
