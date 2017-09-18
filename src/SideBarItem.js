import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { NavLink } from 'react-router-dom';
import { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
	root: {
		width: 200,
		flex: 'initial',
	}
})

class SideBarItem extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
		this.classes = props.classes;
	}

	render() {
		return (
			<NavLink className={this.classes.root}
				activeClassName="active"
				exact={this.props.isExact}
				to={this.props.linkTo}
				key={this.props.i}
			>
				<MenuItem onClick={this.props.handleClose}>{this.props.primaryText}</MenuItem>
			</NavLink>
		);
	}
}

export default withStyles(styles)(SideBarItem);