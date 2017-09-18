import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';
import firebase from '../db/firebase-config';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: 'rgb(255, 255, 141)',
  },
  container: {
    marginLeft: 1,
    marginRight: 1,
  },
  typo: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

class Person extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.match.params.name,
			qualities: [],
			properName: ""
		}
		this.classes = props.classes;
		this.parseDetails(this.state.name);
	}

	getDetails(name, callback) {
		firebase.database().ref('personality/' + name).once("value", function(snap) {
			callback(snap.val());
		});
	}

	parseDetails(name) {
		this.getDetails(name, (data) => {
			this.setState({
				qualities: data.qualities,
				properName: data.properName
			});
		});
	}

	componentDidMount() {
		
	}

	componentWillReceiveProps(props) {
		this.parseDetails(props.match.params.name);
		this.setState({
			name: props.match.params.name,
		});
	}

	render () {
		return (
			<Grid container justify='center' spacing={16}>
				<Grid item xs={12}>
					<h1>{this.state.properName}</h1>
				</Grid>
				{this.state.qualities.map((quality, i) => {
						return (
							<Grid item
							          xs={11} 
							          sm={5} 
							          md={2} 
							          lg={1}
							          key={i}
							 >
								 <Card className={this.classes.card} elevation={8}>
								 	<CardContent>
								          		<Typography component="h3">
								          			{quality}
								          		</Typography>
									</CardContent>
								</Card>
							</Grid>
						);
				})}
			</Grid>
		)
	}
}

export default withStyles(styles)(Person);