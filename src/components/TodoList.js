import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
	root: {
	  flex: 1,
	  marginBottom: 40,
	}
});

import { observer } from 'mobx-react/native';

import Todo from './Todo'

@observer
export default class TodoList extends Component {

	render() {

		const { todoData } = this.props;
		return (
			<ScrollView style={styles.root}>
			  {
			  	todoData.map((data, index) => {
			  	  if(data.valid){
			  	  	return <Todo key={index} data={data} todoData={todoData} />
			  	  }
			  	})
			  }
			</ScrollView>

		);
	};
}