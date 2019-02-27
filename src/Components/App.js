import React, { Component } from 'react';
import GlobalStyle from "./GlobalStyle";
import GetWeather from "./GetWeather";

class App extends Component {
  render() {
    return (
      <>
        <GetWeather></GetWeather>
        <GlobalStyle></GlobalStyle>
      </>
    );
  }
}

export default App;
