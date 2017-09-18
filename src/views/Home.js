import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    textAlign: "center",
  },
});


class Home extends Component {
	
	constructor(props) {
		super(props);
		this.classes = props.classes;
	}
	
	render() {
		return (
			<Grid 
				container 
				className= {this.classes.root} 
				justify= 'center'
			>
				<Grid item xs={11} md={6}>
					<Paper className={this.classes.paper} elevation={4}>
						<Typography type="headline" component="h3">
							Welcome to Drunk, Stoned & Stupid.
						</Typography>
						<Typography type="body1" component="p">
							Select a person from the left pane to start.
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		)
	}	
}

export default withStyles(styles)(Home);