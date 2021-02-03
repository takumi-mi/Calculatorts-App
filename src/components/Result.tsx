import React, { FC } from "react";

const Result: FC<{ result: number | string }> = ({ result }) => (
  <div className="ResultValue">{result}</div>
);

export default Result;
