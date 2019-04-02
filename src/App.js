import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Components/Areas/Header";
import Market from "./Components/Areas/Market";
import LateralMenu from "./Components//Areas/LateralMenu";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppWrapper>
          <Header />
          <Market />
          <LateralMenu />
        </AppWrapper>
      </div>
    );
  }
}

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(100px, 1fr));
  grid-template-rows: 150px, 1fr;
  grid-column-gap: 0.3em;
`;

export default App;
