import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet } from 'react-native';

export default class home extends Component{
static navigationOptions= ({navigation}) =>({
		  title: 'Welcome',	
	});  
	
	render(){
		const { navigate } = this.props.navigation;
		return(
	  <View style={styles.container}>	
	  
	   <Text style={styles.pageName}>profile</Text>
	   

      </View>
		);
	}
}
const styles = StyleSheet.create({
	container:{
		display:'flex',alignItems:'center',
		justifyContent:'center'
	},

	pageName:{
		margin:10,fontWeight:'bold',
		color:'#000', textAlign:'center'
	},

	
});


AppRegistry.registerComponent('profile', () => profile);
