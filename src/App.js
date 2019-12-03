import React from 'react';
import './App.css';
import Header from "./shared/View/Header"
import Footer from "./shared/View/Footer"

import Home from "./shared/Pages/Home"
import About from './shared/Pages/About'
import Authors from "./shared/Pages/Authors"

import { Switch, Route } from "react-router-dom";
import SinglePost from './shared/Components/Posts/SinglePost';
import SingleAuthor from './shared/Components/Author/SingleAuthor';
import { fetchPost } from './services/PostServices';




class App extends React.Component {


  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Authors" component={Authors} />
          <Route exact path="/SinglePost" component={SinglePost} />
          <Route exact path="/SingleAuthor" component={SingleAuthor} />
        </Switch>

        <Footer />
      </>

    )
  }
}

export default App;
