import React from "react";
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/index';
import Resume from './components/Resume';
import Portfolio from "./components/Portfolio";
import './App.css';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
    <Route exact path="/" component={Home} />
    <Route exact path="/" component={Resume} />
    <Route exact path="/" component={Portfolio} />
    </React.Fragment>



  );
}

export default App;
