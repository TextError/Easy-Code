import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components Layout
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/layout/Register';
//----------------------------------------------
import Home from './components/home/Home'
import Html from './components/html/Html';
import Css from './components/css/Css';
import JavaScript from './components/js/JavaScript';

//Redux
import store from './store';
import { Provider } from 'react-redux';

//CSS
import './style/App.css';

import TestState from './react-redux/TestState';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='container-fluid'>
            <Navbar />
            <Route exact path='/' component={Landing} />
            <Route exact path='/register' component={Register} />
            <Route excat path='/home'  component={Home}/>
            <Route exact path='/Css' component={Css}/>
            <Route exact path='/Html' component={Html} />
            <Route exact path='/JavaScript' component={JavaScript} />

            <Route exact path='/test' component={TestState} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
