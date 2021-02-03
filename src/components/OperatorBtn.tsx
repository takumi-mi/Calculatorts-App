import React, { FC, useContext } from "react";
import Context from "./Context";
import { Actions } from "../reducers";

const OperatorBtn: FC<{ o: string; action: Actions; addClass?: string }> = ({
  o,
  action,
  addClass
}) => {
  const { dispatch } = useContext(Context);

  return (
    <button
      className={"OperatorBtn" + (addClass || "")}
      onClick={() => dispatch(action)}
    >
      {o}
    </button>
  );
};

export default OperatorBtn;
