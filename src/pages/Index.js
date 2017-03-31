import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import todoData from '../logics/todoData';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

const styles = StyleSheet.create({
	root: {
	  flex: 1,	
	},
	text: {
	  color: '#333333',
	  textAlign: 'center',
	  fontSize: 30,
	  fontWeight: 'bold',
	  paddingTop: 10,
	  paddingBottom: 10,
	},
	textInputWrapper: {
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	  alignItems: 'center',
	  height: 40,
	},
	textInput: {
	  height: 40,
	  width: 340,
	  borderColor: '#C2C2C2',
	  borderWidth: 1,
	  marginLeft: 15,
	  marginRight: 15,
	  marginBottom: 10,
	  padding: 5,
	  shadowOffset: {
	  	width: 0,
	  	height: 0,
	  },
	  shadowColor: '#C2C2C2',
	  shadowOpacity: 1,
	},

	textInputShort: {
	  width: 290,
	},

	addBtn: {
	  height: 0,
	  borderRadius: 12,
		// backgroundColor: '#f23030',
	  backgroundColor: '#5e7d00',
	  borderColor: '#5e7d00',
	  paddingHorizontal: 10,
	  marginRight: 10,
	  // height: 24,
	  justifyContent: 'center',
	},

	showAddBtn: {
		height: 24,
	},
  
	addBtnText: {
	  color: '#ffffff',
	}
});


export default class Index extends Component {

   constructor (props) {
	  super(props);
	  this.state = {
	  	showAddBtn: false,
	  };
	}

	updateInputText = (opt) => {
	  if (opt === 'onFocus') {
	 	this.setState({
	      showAddBtn: true,
		}); 	
	  } else if (opt === 'onBlur') {
	  	this.setState({
	  	  showAddBtn: false,
	  	});
	  } else {
	  	this.setState({
	  	  newTodo: opt
	  	});
	  }
	  
	}

	addTodo = () => {
	  todoData.add(this.state.newTodo);
	}
	

	render() {
		return (
			<View style={styles.root}>
			  <Text style={styles.text}>Todos</Text>
			  <View style={styles.textInputWrapper}>
			    <TextInput style={[styles.textInput, this.state.showAddBtn && styles.textInputShort]} 
			  	  onChangeText={(text) => this.updateInputText(text)} 
			  	  placeholder='What needs to be done?' 
			  	  onFocus={() => this.updateInputText('onFocus')} 
			  	  onBlur={() => this.updateInputText('onBlur')} />
			  	<TouchableOpacity style={[styles.addBtn, this.state.showAddBtn && styles.showAddBtn]} onPress={this.addTodo} >
			  	  <Text style={styles.addBtnText}>Add</Text>
			    </TouchableOpacity>
			  </View>
			  <TodoList todoData={todoData} />
			  <Footer todoData={todoData} />

			</View>

		);
	};
}