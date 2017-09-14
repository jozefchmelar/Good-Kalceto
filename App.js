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
  Button,FlatList,
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
          <Text style={[styles.smallerText,{marginBottom:16}]}>Free match 2 on 2</Text>
          
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

    constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          data: [{key:1,winner:'blue'},{key:21,winner:'red'},{key:31,winner:'blue'},{key:41,winner:'blue'},{key:18,winner:'red'}],
          scoreRed  : 0 ,
          scoreBlue : 0,
          error: null,
          refreshing: false,
        };
      }
    
    _keyExtractor = (item, index) => item.key;
    
    _renderGoal = ({item}) => (
        <View style={[ styles.card]} >
            <View style={{flex:100,flexDirection:'row'}}>
                <View style={{flex:20}}>
                    {item.winner=='red' ? <Image style={{margin:16,width:50, height:50}} source={require('./res/pic/cervenychlap.png')}/> : <Image  style={{margin:16,width:50, height:50}} source={require('./res/pic/modrychlap.png')}/> }
                </View>
                <View style={{flex:80,margin:16,flexDirection:'column',justifyContent:'center'}}>
                    {item.winner=='red' ?
                        <Text style={[styles.mediumText,{color:'#ea5859'}]} >CERVENY GOL</Text> :
                    <Text style={[styles.mediumText,{color:'#4b90e2'}]}>MODRY GOoL</Text>}
                </View>
            </View>
        </View>
  );

  render() {
    const { navigate } = this.props.navigation;   
    return (        
     <View style={{flexDirection:'column', flex:100}}>
        <View style={{flex :30 ,backgroundColor:'white',flexDirection:'row' ,justifyContent:'space-between'}}>
         
            <View style={{flexDirection:'column',margin:16,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity  onPress={() => this.state.data.push({key:57987,winner:'red'})}>
                <Image  style={{width:100 ,height:100}} source={require('./res/pic/cervenychlap.png')}/>
                <Text>RED TEAM</Text>      
                </TouchableOpacity>  
            </View>


            <View style={{flexDirection:'column',margin:16,justifyContent:'center',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.bigText,{color:'#ea5859'}]}>{this.state.scoreRed}</Text>
                    <Text style={[styles.bigText,{color:'black'}]}>:</Text>
                    <Text style={[styles.bigText,{color:'#4b90e2'}]}>{this.state.scoreBlue}</Text>
                    
                </View>
                <Text>0:0,0:0,0:0</Text>      
            </View>
            
            <View style={{flexDirection:'column',margin:16,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity  onPress={() => this.state.data.push({key:555,winner:'blue'})}>
                <Image style={{width:100 ,height:100}}  source={require('./res/pic/modrychlap.png')}/>
                <Text>BLUE TEAM</Text>        
                </TouchableOpacity>
            </View>

        </View>
        <View style={{flex :70,backgroundColor:'#f1f2f5' }}>
        <FlatList
        keyExtractor={this._keyExtractor}
        
                   data={this.state.data}
           
            renderItem={this._renderGoal}
        />
        </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
    mediumText:{
        fontSize: 14    
    },
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
