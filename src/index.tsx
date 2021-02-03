import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Context from "./components/Context";
import { initialAppState, reducer } from "./reducers";

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialAppState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
