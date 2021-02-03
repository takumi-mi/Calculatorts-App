import React, { FC, useContext } from "react";
import Context from "./Context";
import { onNumClick } from "../reducers";

const NumBtn: FC<{ n: number; addClass?: string }> = ({ n, addClass }: any) => {
  const { dispatch } = useContext(Context);
  return (
    <button
      onClick={() => dispatch(onNumClick(n))}
      className={"NumBtn" + (addClass || "")}
    >
      {n}
    </button>
  );
};

export default NumBtn;
