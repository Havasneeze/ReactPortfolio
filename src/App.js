import React from "react";
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components/';
import Resume from './components/Resume';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Route exact path="/" component={Home}/>
      <Route exact path="/Resume" component={Resume} />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/Contact" component={Contact} />
    </React.Fragment>

  );
}

export default App;
