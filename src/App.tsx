import React, { useContext } from "react";

import "./App.css";
import NumBtn from "./components/NumBtn";
import OperatorBtn from "./components/OperatorBtn";
import ClearBtn from "./components/ClearBtn";
import Result from "./components/Result";
import Context from "./components/Context";

import {
  onClearClick,
  onEqualClick,
  onDivideClick,
  onMultiplyClick,
  onPlusClick,
  onMinusClick
} from "./reducers";

const App: React.FC = () => {
  const { state } = useContext(Context);

  return (
    <>
      <div className="Container">
        <div className="Display">
          <Result
            result={state.showingResult ? state.resultValue : state.inputValue}
          />
        </div>
        <div className="Wrapper">
          <div className="Row">
            <ClearBtn c={"C"} action={onClearClick()} />
            <OperatorBtn 
            addClass="_divided OperatorBtn"
            action={onDivideClick()} />
          </div>
          <div className="Row">
            <NumBtn n={7} />
            <NumBtn n={8} />
            <NumBtn n={9} />
            <OperatorBtn
              addClass="_multiple OperatorBtn"
              action={onMultiplyClick()}
            />
          </div>
          <div className="Row">
            <NumBtn n={4} />
            <NumBtn n={5} />
            <NumBtn n={6} />
            <OperatorBtn
              addClass="_minus OperatorBtn"
              action={onMinusClick()} />
          </div>
          <div className="Row">
            <NumBtn n={1} />
            <NumBtn n={2} />
            <NumBtn n={3} />
            <OperatorBtn
              addClass="_plus OperatorBtn"
              action={onPlusClick()} />
          </div>
          <div className="Row">
            <NumBtn n={0} addClass="_zero" />
            <OperatorBtn o={"."} addClass="_dem" action={onEqualClick()} />
            <OperatorBtn 
            addClass="_equal OperatorBtn"
             action={onEqualClick()} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
