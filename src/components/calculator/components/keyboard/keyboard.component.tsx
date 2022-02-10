import React, { useContext } from "react";
import { Button } from "../button";
import { CalculatorContext } from "../../calculator.context";
export const Keyboard = () => {
  const { setDisplay } = useContext(CalculatorContext);
  return (
    <>
      <Button text="+" color="red" onClick={() => setDisplay("+")} />
      <Button text="-" color="white" onClick={() => setDisplay("-")} />
    </>
  );
};
