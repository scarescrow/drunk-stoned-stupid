import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styleSheet = {
	root: {
		width: '100%',
	},
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
	}
};

function ButtonAppBar(props) {
	const classes = props.classes;
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar disableGutters>
					<IconButton 
						aria-label="Menu" 
						color="contrast"
						className={classes.menuButton}
						onClick={props.handleButtonOpen}
					>
						<MenuIcon />
					</IconButton>
					<Typography type="title" color="inherit" className={classes.flex}>
						Drunk, Stoned & Stupid.
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

ButtonAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet, {name: 'ButtonAppBar'})(ButtonAppBar);
// export default AppBar;