import React, { useContext, useState } from "react";
import { CalculatorContext } from "../../calculator.context";
import { KeyboardButton } from "./keyboardButton.type";

export const useKeyboardButtons = () => {
  const {
    display,
    setDisplay,
    setMemory,
    memory,
    setEquation,
    equation
  } = useContext(CalculatorContext);

  const handleClear = () => {
    setDisplay("");
    //only clear equation if display is empty, clicked twice
    if (display !== "") return;
    setEquation("");
  };

  const buildEquation = (symbol: string) => {
    //dont add if there isn't a display value to equate
    if (display === "") return;
    const newE = equation ? equation + display + symbol : display + symbol;
    setEquation(newE);
    setDisplay("");
  };

  const executeEquation = () => {
    //todo
    const currentE = equation + display;
    const answer = "this is your answer";
    setDisplay(answer);
    setEquation("");
  };

  const calculatorButtons: KeyboardButton[] = [
    {
      text: "+/-",
      color: "red",
      function: () => setDisplay(display * -1)
    },
    {
      text: "√",
      color: "red",
      function: () => setDisplay(Math.sqrt(display))
    },
    {
      text: "%",
      color: "red",
      function: () => setDisplay(Number(display * 0.01).toFixed(2))
    },
    {
      text: "÷",
      color: "red",
      function: () => buildEquation("/")
    },
    {
      text: "MRC",
      color: "red",
      function: () => setDisplay(memory) //set memory as display and clear memory will need to build out this function
    },
    {
      text: "M-",
      color: "red",
      function: () => setMemory(null)
    },
    {
      text: "M+",
      color: "red",
      function: () => setMemory(display)
    },
    {
      text: "x",
      color: "red",
      function: () => buildEquation("*")
    },
    {
      text: "7",
      color: "white",
      function: () => setDisplay(display + "7")
    },
    {
      text: "8",
      color: "white",
      function: () => setDisplay(display + "8")
    },
    {
      text: "9",
      color: "white",
      function: () => setDisplay(display + "9")
    },
    {
      text: "-",
      color: "red",
      function: () => buildEquation("-")
    },
    {
      text: "4",
      color: "white",
      function: () => setDisplay(display + "4")
    },
    {
      text: "5",
      color: "white",
      function: () => setDisplay(display + "5")
    },
    {
      text: "6",
      color: "white",
      function: () => setDisplay(display + "6")
    },
    {
      text: "+",
      color: "red",
      function: () => buildEquation("+")
    },
    {
      text: "1",
      color: "white",
      function: () => setDisplay(display + "1")
    },
    {
      text: "2",
      color: "white",
      function: () => setDisplay(display + "2")
    },
    {
      text: "3",
      color: "white",
      function: () => setDisplay(display + "3")
    },
    {
      text: "=",
      color: "red",
      function: () => executeEquation()
    },
    {
      text: "on/c",
      color: "red",
      function: () => handleClear()
    },
    {
      text: "0",
      color: "white",
      function: () => setDisplay(display + "0")
    },
    {
      text: ".",
      color: "white",
      function: () => setDisplay(display + ".")
    }
  ];
  return calculatorButtons;
};
