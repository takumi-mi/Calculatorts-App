import React, { FC, useContext } from "react";
import Context from "./Context";
import { Actions } from "../reducers";

const ClearBtn: FC<{ c: string; action: Actions }> = ({ c, action }) => {
  const { dispatch } = useContext(Context);

  return (
    <button className="ClearBtn" onClick={() => dispatch(action)}>
      {c}
    </button>
  );
};

export default ClearBtn;
