import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
	checked: {
	  // color: '#f23030',
	  color: '#799c13',
	},
	checkIcon: {
	  fontSize: 24,
	  /*color: '#d1d1d1',*/
	  color: '#d1d1d1',
	  fontWeight: 'bold',
	}
});


export default class Circle extends Component {

	constructor (props) {
	  super(props);
	  this.state = {
	  	checked: props.checked,
	  };
	}

	componentWillReceiveProps (nextProps) {
	  this.setState({checked: !!nextProps.checked})
	}

	select = () => {
	  const { onPress } = this.props;
	  let { checked } = this.state;
	  checked = !checked;
	  this.setState({
	  	checked,
	  });
	  onPress && onPress(checked);
	}

	render() {
		return (
		  <Icon name="ios-checkmark-circle" style={[styles.checkIcon, this.state.checked && styles.checked]} onPress={this.select}/>
		);
	};
}