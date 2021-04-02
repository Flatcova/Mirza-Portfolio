import React, {Component, Fragment} from 'react';
import { Route, Switch } from 'react-router';
import Error from './Components/404NotFound';
import AboutPage from './Components/AboutMe';
import ContactPage from './Components/Contact';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import PhotosPage from './Components/PhotosPage';
import PortfolioPage from './Components/Portfolio';
import ProjectPage from './Components/ProjectPage';

import './index.css';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Fragment>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/portfolio' exact component={PortfolioPage} />
          <Route path='/portfolio/:id' component={ProjectPage} />
          <Route path='/photos' component={PhotosPage} />
          <Route path='/contact' component={ContactPage} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Fragment>
     );
  }
}
 
export default App;