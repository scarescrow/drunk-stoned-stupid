import React, { Component } from 'react';
import './styles/App.css';
// import './styles/materialize/css/materialize.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

/* Material UI */
import { MuiThemeProvider } from 'material-ui/styles';
import fusTheme from './fusTheme';

import SideNav from './SideNavItem';

/* Views */

import Home from './views/Home';
import NotFound from './views/NotFound';
import Person from './views/Person';

injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  };

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={fusTheme}>
          <div>
            <SideNav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path='/characters/:name' component={Person} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
