import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import './App.css';
import { Router, navigate } from '@reach/router';
import Main from './components/Main';
import Action from './components/Action';


function App() {
  const clickHandler = e => {
    navigate("/")
  }
  return (
    <Fragment>
      <div className="jumbotron">
        <h1 className="display-3">Hello, stranger!</h1>
        <p className="lead">Welcome to Star Wars World.</p>
        <hr className="my-5"></hr>
        <p>Find everything you need for your journey</p>
        <input className="btn btn-lg btn-info" value="Home" onClick={clickHandler} />

      </div>
      <Router>
        <Main exact path="/" />
        <Action exact path="/:category/:id" component={Action} />
      </Router>
    </Fragment>
  );
}

export default App;
