/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Button,
    TouchableOpacity
} from 'react-native';
import FBSDK, {LoginManager} from 'react-native-fbsdk'
export default class FbLoginTest extends Component {_fbAuth(){
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result)
    {
        if(result.isCancelled)
        {
            console.log('Login was Cancelled');
        }
        else
        {
            console.log('Login was a success, '+result.grantedPermissions.toString());
        }
    }, function(error){
        console.log("An error occured: "+error);

    })
}

    render() {
        return (
            <View style={styles.container}>
              <Button onPress={this._fbAuth()} style={styles.buttonsty}>
<Text style={styles.welcome}>Login with Facebook</Text>
              </Button>
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    buttonsty:{
    width:120,
        height:120
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FbLoginTest', () => FbLoginTest);
