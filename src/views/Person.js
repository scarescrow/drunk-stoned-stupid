import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';

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
  }
});

class Person extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.match.params.name,
		}
		this.classes = props.classes;
	}

	componentWillReceiveProps(props) {
		this.setState({
			name: props.match.params.name,
		});
	}

	render () {
		return (
			<Grid container justify='center' spacing={16}>
				<Grid item xs={12}>
					<h1>{this.state.name}</h1>
				</Grid>
				<Grid item
				          xs={11} 
				          sm={5} 
				          md={2} 
				          lg={1}
				 >
				          <Card className={this.classes.card}>
				          	<CardContent>
				          		<Typography component="p">
				          			Makes sure other people get more fucked up than him
				          		</Typography>
				          	</CardContent>
				          </Card>
				</Grid>
			</Grid>
		)
	}
}

export default withStyles(styles)(Person);