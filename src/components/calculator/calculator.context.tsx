import React, { useState, createContext } from "react";

interface CalcContext {
  //TODO Type Later
  equation: any;
  setEquation: any;
  memory: any;
  setMemory: any;
  answer: any;
  setAnswer: any;
  display: number;
  setDisplay: (number: number) => void;
}

export const CalculatorContext = createContext<CalcContext>({
  equation: "",
  setEquation: () => {},
  memory: "",
  setMemory: () => {},
  answer: "",
  setAnswer: () => {},
  display: 0,
  setDisplay: () => {}
});

export const CalculatorContextProvider = ({
  children
}: {
  children: JSX.Element;
}) => {
  const [equation, setEquation] = useState<string>("");
  const [memory, setMemory] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [display, setDisplay] = useState<number>(0);

  const initialContextValue = {
    equation,
    setEquation,
    memory,
    setMemory,
    answer,
    setAnswer,
    display,
    setDisplay
  };
  return (
    <CalculatorContext.Provider value={initialContextValue}>
      {children}
    </CalculatorContext.Provider>
  );
};
