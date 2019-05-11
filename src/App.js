import React, { Component } from 'react';
import NaviBar from "../src/components/navbar";
import Jumbi from "../src/components/jumbotron";
import BookSearch from "../src/components/bookSearch";
import BookCard from "../src/components/bookcard";

class App extends Component {

  render() {
    return (

      <div className="App container">
        <NaviBar />
        <Jumbi />
        <BookSearch />
        <BookCard />
      </div>
    );
  }
}

export default App