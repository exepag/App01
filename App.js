import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';


export default class App extends Component {
  render() {
    return (
	<View style={{flex:1}}>
	      <View style={{flex:1/3, flexDirection:'row', backgroundColor:'darkblue'}}>
		 <Text style={{color:'white', fontSize:30}}>
		    Hello World!
		    This is a great chance to progress.
		 </Text>
	      </View>
	      <View style={{flex:1/3, flexDirection:'row', backgroundColor:'orange'}}>
		 <Text style={{color:'black', fontSize:30}}>
		    Hello Friend!
		    Keep doing exercises until mastery.
		 </Text>
	      </View>
	      <View style={{flex:1/3, flexDirection:'row', backgroundColor:'yellow'}}>
		 <Text style={{color:'black', fontSize:30}}>
		    Hello Teacher!
		    Thank you so much for the guidance.
		 </Text>
	      </View>
	</View>
    )
  }
}

const styles = StyleSheet.create({
});
