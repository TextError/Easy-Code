import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components Layout
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
//----------------------------------------------
import Css from './components/CSS/Css';
import Html from './components/HTML/Html';
import JavaScript from './components/JS/JavaScript';


//CSS
import './style/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container-fluid'>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Route exact path='/Css' component={Css}/>
          <Route exact path='/Html' component={Html} />
          <Route exact path='/JavaScript' component={JavaScript} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
