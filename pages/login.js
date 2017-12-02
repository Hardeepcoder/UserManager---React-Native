import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,TouchableOpacity,TextInput,Button,Keyboard
} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class login extends Component {
	static navigationOptions= ({navigation}) =>({
		  title: 'Login',	
		  headerRight:	
		  <TouchableOpacity
			onPress={() => navigation.navigate('Home')}
			style={{margin:10,backgroundColor:'orange',padding:10}}>
			<Text style={{color:'#ffffff'}}>Home</Text>
		  </TouchableOpacity>
		
	});  
	constructor(props){
		super(props)
		this.state={
			userEmail:'',
			userPassword:''
		}
	}
	
	login = () =>{
		const {userEmail,userPassword} = this.state;
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(userEmail==""){
			//alert("Please enter Email address");
		  this.setState({email:'Please enter Email address'})
			
		}
		
		else if(reg.test(userEmail) === false)
		{
		//alert("Email is Not Correct");
		this.setState({email:'Email is Not Correct'})
		return false;
		  }

		else if(userPassword==""){
		this.setState({email:'Please enter password'})
		}
		else{
		
		fetch('https://hardeepwork.000webhostapp.com/react/login.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				email: userEmail,
				password: userPassword
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
			 if(responseJson == "ok"){
				 // redirect to profile page
				 alert("Successfully Login");
				 this.props.navigation.navigate("Profile");
			 }else{
				 alert("Wrong Login Details");
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		}
		
		
		Keyboard.dismiss();
	}
	
  render() {
    return (
	<View style={styles.container}>    
	<Text style={{padding:10,margin:10,color:'red'}}>{this.state.email}</Text>
	
	<TextInput
	placeholder="Enter Email"
	style={{width:200, margin:10}}
	onChangeText={userEmail => this.setState({userEmail})}
	/>
	
	<TextInput
	placeholder="Enter Password"
	style={{width:200, margin:10}}
	onChangeText={userPassword => this.setState({userPassword})}
	
	/>
	
	
	<TouchableOpacity
	onPress={this.login}
	style={{width:200,padding:10,backgroundColor:'magenta',alignItems:'center'}}>
	<Text style={{color:'white'}}>Login</Text>
	</TouchableOpacity>
	
	
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

});

AppRegistry.registerComponent('login', () => login);
