import React, { Component } from 'react';
import ButtonAppBar from './components/ButtonAppBar'
import Drawer from 'material-ui/Drawer';
import SideBarItem from './SideBarItem';
import Divider from 'material-ui/Divider';

import firebase from './db/firebase-config';

const links = [
	{ isExact: false, linkTo: '/characters/aakash', text: 'Aakash'},
	{ isExact: false, linkTo: '/characters/sagnik', text: 'Sagnik'},
	{ isExact: false, linkTo: '/characters/shreya', text: 'Shreya'},
];

class SideNav extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false, links: [] };
	}

	componentDidMount() {
		this.getPeople((people) => {
			var links = []
			for (var key in people) {
				var person = {
					isExact: false,
					linkTo: '/characters/' + key,
					text: people[key]
				};
				links.push(person);
			}
			this.setState({links: links});
		});
	}

	getPeople(callback) {
		var ref = firebase.database().ref('people');
		firebase.database().ref('people').once("value", function(snap) {
			callback(snap.val());
		});
	}

	handleClose = () => this.setState({ open: false });
	handleOpen = () => this.setState({ open: true });

	render() {
		return (
			<div>
				<ButtonAppBar handleButtonOpen={this.handleOpen} />
				<Drawer
					open={this.state.open}
					onRequestClose={() => this.setState({open: false})}
					onClick={this.handleClose}
				>
					<SideBarItem
						isExact={true}
						linkTo={'/'}
						primaryText={'Home'}
						handleClose={this.handleClose}
						i={-1}
					/>
					<Divider />
					{this.state.links.map((link, i) => {
						return (
							<SideBarItem
								isExact={link.isExact}
								linkTo={link.linkTo}
								primaryText={link.text}
								handleClose={this.handleClose}
								key={i}
								i={i}
							/>
						);
					})}
				</Drawer>
			</div>
		);
	}
}

export default SideNav;