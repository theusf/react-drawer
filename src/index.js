
import React from "react";
import ReactDOM from "react-dom";

import {BaseProvider, DarkTheme} from 'baseui';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import Example from "./example";

const engine = new Styletron();

function App() {
  return <Example />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={DarkTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  rootElement
);
