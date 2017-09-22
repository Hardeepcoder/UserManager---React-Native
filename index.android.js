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
  View,Button,TextInput
} from 'react-native';

export default class UsersManager extends Component {
	
	constructor(props){
		super(props)
		this.state={
			userName:'',
			userEmail:'', 
			userPassword:''		
			
		}
	}
	
	userRegister = () =>{
		//alert('ok'); // version 0.48
		
		const {userName} = this.state;
		const {userEmail} = this.state;
		const {userPassword} = this.state;
		
		
		fetch('http://hardeepcoder.com/react/register.php', {
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				name: userName,
				email: userEmail,
				password: userPassword,
			})
			
		})
		.then((response) => response.json())
			.then((responseJson) =>{
				alert(responseJson);
			})
			.catch((error)=>{
				console.error(error);
			});
		
	}
	
  render() {
    return (
	<View style={styles.container}>
      
	  <TextInput
	  placeholder="Enter Name"
	  style={{width:200,margin:10}}
  onChangeText= {userName => this.setState({userName})}
	  
	  />
	  
	  <TextInput
	  placeholder="Enter Email"
	  style={{width:200,margin:10}}
	  onChangeText= {userEmail => this.setState({userEmail})}
	  />
	  
	  <TextInput
	  placeholder="Enter Password"
	  style={{width:200,margin:10}}
	  onChangeText= {userPassword => this.setState({userPassword})}
	  />
	  
	  <Button title="Signup"
	  onPress={this.userRegister}
	  color="magenta"/>
	  
	  
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

AppRegistry.registerComponent('UsersManager', () => UsersManager);
