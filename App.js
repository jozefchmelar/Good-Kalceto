/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ToolbarAndroid,TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class MainScreen extends Component {
    static navigationOptions = {
      title: 'Choose type of the game',
      backgroundColor: '#3c97f4'
    };
 
  render() {
    const { navigate } = this.props.navigation;    
    return (
      <View
        style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
     
      
        <View style={[styles.container, styles.card]} >

        <TouchableOpacity style={[styles.container, styles.card]} onPress={() => navigate('Game')}>
          <Image source={require('./res/pic/lopta.png')}/>
        </TouchableOpacity>
          
          <Text style={styles.bigText}>Standart match</Text>
          <Text style={styles.smallerText}>Free match 2 on 2</Text>
          
        </View>

        <View style={[styles.container, styles.card]}>
          <Image source={require('./res/pic/winner.png')}/>
          <Text style={styles.bigText}>Championship</Text>
          <Text style={styles.smallerText}>Championship BITCH</Text>
        </View>

      </View>
    );
  }
}

class GameScreen extends Component {
    static navigationOptions = {
      title: 'Free match',
      backgroundColor: '#3c97f4'
    };
  render() {
    const { navigate } = this.props.navigation;   
    return (        
     <View style={{flexDirection:'column', flex:100}}>
        <View style={{flex :30 ,backgroundColor:'white',flexDirection:'row' ,justifyContent:'space-between'}}>
         
            <View style={{flexDirection:'column',margin:16,justifyContent:'center',alignItems:'center'}}>
                <Image  style={{width:100 ,height:100}} source={require('./res/pic/cervenychlap.png')}/>
                <Text>RED TEAM</Text>        
            </View>


            <View style={{flexDirection:'column',margin:16,justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.bigText}>0:0</Text>      
                <Text>0:0,0:0,0:0</Text>      
            </View>
            
            <View style={{flexDirection:'column',margin:16,justifyContent:'center',alignItems:'center'}}>
                <Image style={{width:100 ,height:100}}  source={require('./res/pic/modrychlap.png')}/>
                <Text>Blue TEAM</Text>        
            </View>

        </View>
        <View style={{flex :70,backgroundColor:'#f1f2f5' }}></View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  bigText: {
    color: '#4a9eff',
    fontSize: 28
  },
  smallerText: {
    marginTop: 8,
    color :'#acacac',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 5
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    margin: 8,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOffset: {
      height: 5,
      width: 0.3
    }
  }

});

const Hackaton = StackNavigator({
  Home: { screen: MainScreen },
  Game: { screen:  GameScreen},
});

AppRegistry.registerComponent('Hackaton', () => Hackaton);
