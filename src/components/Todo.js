import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Circle from './Circle';
import Swipeout from 'react-native-swipeout';
import { observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({
	root: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 2,
		height: 50,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
		// marginLeft: 15,
		// marginRight: 15,
	},
	
	content: {
	  marginLeft: 15,
	},
	
	name: {
	  color: '#333333',
	  fontSize: 14,
	  fontWeight: 'bold',

	},
	completed: {
	  color: '#777777',
	  fontSize: 15,
	  fontWeight: 'bold',
	  textDecorationLine: 'line-through',
	},
	swipeOut: {
	  marginLeft: 18,
	  marginRight: 18,
	}
	
});

@observer
export default class Todo extends Component {

	check = (checked) => {
	  const {data, todoData} = this.props;
	  todoData.check(checked, data.id);
	};
	
	render() {

		const { index, data: {id, name, completed}, todoData } = this.props;
		const swipeoutBtns = [{
		  underlayColor: '#cccccc',
		  backgroundColor: '#f23030',
		  borderColor: '#cccccc',
		  text: '删除',
		  onPress: () => {
			todoData.delet(id);
		  }
	    }];
		return (
		  <Swipeout right={swipeoutBtns} style={styles.swipeOut} backgroundColor="#ffffff">
		  <View style={styles.root}>
		  	<Circle onPress={this.check} checked={completed} />
		  	<View style={styles.content}>
		  	  <Text style={[styles.name, completed && styles.completed]}>{name}</Text> 	  
		  	</View>
		  </View>
		  </Swipeout>
		);
	};
}