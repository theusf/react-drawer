
import React from "react";
import ReactDOM from "react-dom";

import { BaseProvider, LightTheme } from 'baseui';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import Drawer from "./drawer";
import Home from "./home";
import Grids from "./grid"


const engine = new Styletron();

function App() {
  return (

    <div style={{
      backgroundImage: "linear-gradient(to right, #4776e6, #8e54e9)",
      height: '100%',
      position: 'absolute',
      left: '0px',
      width: '100%',
      overflow: 'hidden',
      top: 0,
      paddingBottom: '20px'
    }}>



      <Drawer />

      <Home />

      <Grids />


    </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  rootElement
);
