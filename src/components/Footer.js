import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
	root: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: 'row',
		height: 50,
		backgroundColor: '#F5F5F5',
		/*backgroundColor: '#f23030',*/
		justifyContent: 'space-between',
		borderTopColor: '#f5f5f5',
		borderTopWidth: StyleSheet.hairlineWidth,
		alignItems: 'center',

	},
	selectWrapper:{
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 10,
	},
	selectAll: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderColor: '#000',
		borderWidth: StyleSheet.hairlineWidth,
	},
	checked: {
		backgroundColor: '#f23030',
	},
	selectText: {
		marginLeft: 8,
	},
	checkout: {
		borderRadius: 12,
		// backgroundColor: '#f23030',
		backgroundColor: '#b4b8ad',
		borderColor: '#b4b8ad',
		paddingHorizontal: 10,
		marginRight: 10,
		height: 24,
		justifyContent: 'center',
	},
	checkoutText: {
		color: '#fff',
	},
	leftWrapper: {
	  flexDirection: 'row',
	  alignItems: 'center',
	},
	leftText: {
	  fontSize: 16,
	  fontWeight: 'bold',
	}
});

import { observer } from 'mobx-react/native';

import Circle from './Circle'

@observer
export default class Footer extends Component {

	selectAll = (checked) => {
	  const { todoData } = this.props;
	  todoData.toggleAll(checked);
 	}

	goBack = () => {
	  const { navigator } = this.props;
	  navigator.pop();
	};

	clearCompleted = () => {
	  const { todoData } = this.props;
	  todoData.clearCompleted();
	}

	render() {

		const { todoData } = this.props;
		return (
		  <View style={styles.root}>
			<View style={styles.selectWrapper}> 	
			  <Circle onPress={this.selectAll} checked={todoData.isSelectAll.get()} />
			  <Text style={styles.selectText}>Mark all</Text>
			</View>  
			<View style={styles.leftWrapper}>
			  <Text style={styles.leftText}>{todoData.leftCount.get()} </Text>
			  <Text>items left</Text>
			</View>
			<TouchableOpacity style={styles.checkout} onPress={this.clearCompleted} >
			  <Text style={styles.checkoutText}>Clear completed</Text>
			</TouchableOpacity>
		  </View>


		);
	};
}