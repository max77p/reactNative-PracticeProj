import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import startMainTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {
    loginHandler=()=>{
        startMainTabs();
    }
  render() {
    console.log(this.props);
    return (
      <View style={styles.basic}>
        <Text>Hello world</Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  basic: {
    // marginTop: 50,
    // borderWidth: 2,
    // color: "black",
    // alignItems: "center",
    // justifyContent: "center"
  }
});

export default AuthScreen;
