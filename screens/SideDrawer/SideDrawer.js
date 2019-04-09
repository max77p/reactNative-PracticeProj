import React,{Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';
class SideDrawer extends Component{
    render(){
        return(
            <View>
                <Text>SideDrawer</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      margin: 22
    }
  });

export default SideDrawer;