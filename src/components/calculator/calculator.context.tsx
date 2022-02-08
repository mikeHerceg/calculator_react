import React, { useState, useContext, createContext } from "react";

interface CalcContext {
  //TODO Type Later
  equation: any;
  setEquation: any;
  memory: any;
  setMemory: any;
  answer: any;
  setAnswer: any;
}

export const CalculatorContext = createContext<CalcContext>({
  equation: "",
  setEquation: () => {},
  memory: "",
  setMemory: () => {},
  answer: "",
  setAnswer: () => {}
});

export const CalculatorContextProvider = ({
  children
}: {
  children: JSX.Element;
}) => {
  const [equation, setEquation] = useState<string>("");
  const [memory, setMemory] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const initialContextValue: CalcContext = {
    equation,
    setEquation,
    memory,
    setMemory,
    answer,
    setAnswer
  };

  return (
    <CalculatorContext.Provider value={initialContextValue}>
      {children}
    </CalculatorContext.Provider>
  );
};
