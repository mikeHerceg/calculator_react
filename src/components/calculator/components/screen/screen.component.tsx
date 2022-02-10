import React, { useContext } from "react";
import { CalculatorContext } from "../../calculator.context";
export const Screen = () => {
  const { display } = useContext(CalculatorContext);
  return <div>{display}</div>;
};
