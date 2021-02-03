import React, { useContext } from "react";

import "./App.scss";
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
            <OperatorBtn o={"÷"} action={onDivideClick()} />
          </div>
          <div className="Row">
            <NumBtn n={7} />
            <NumBtn n={8} />
            <NumBtn n={9} />
            <OperatorBtn
              o={""}
              addClass="_multiple OperatorBtn"
              action={onMultiplyClick()}
            />
          </div>
          <div className="Row">
            <NumBtn n={4} />
            <NumBtn n={5} />
            <NumBtn n={6} />
            <OperatorBtn o={"-"} action={onMinusClick()} />
          </div>
          <div className="Row">
            <NumBtn n={1} />
            <NumBtn n={2} />
            <NumBtn n={3} />
            <OperatorBtn o={"+"} action={onPlusClick()} />
          </div>
          <div className="Row">
            <NumBtn n={0} addClass="_zero" />
            <OperatorBtn o={"."} addClass="_dem" action={onEqualClick()} />
            <OperatorBtn o={"="} action={onEqualClick()} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
