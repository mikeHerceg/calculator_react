import React, { useContext, useState } from "react";
import { CalculatorContext } from "../../calculator.context";
import { KeyboardButton } from "./keyboardButton.type";

type Keys =
  | "+/-"
  | "√"
  | "%"
  | "÷"
  | "MRC"
  | "M-"
  | "M+"
  | "x"
  | "7"
  | "8"
  | "9"
  | "-"
  | "4"
  | "5"
  | "6"
  | "+"
  | "1"
  | "2"
  | "3"
  | "="
  | "on/c"
  | "0"
  | "."
  //remove or move
  | "/"
  | "*";

export const useKeyboardButtons = () => {
  const {
    display,
    setDisplay,
    setMemory,
    memory,
    setEquation,
    equation
  } = useContext(CalculatorContext);

  const [lastKey, setLastKey] = useState<Keys>();

  const handleClear = () => {
    setDisplay("");
    //only clear equation if display is empty, clicked twice
    if (display !== "") return;
    setEquation("");
  };

  const buildEquation = (symbol: Keys) => {
    //dont add if there isn't a display value to equate
    if (display === "") return;
    const newE = equation ? equation + display + symbol : display + symbol;
    setEquation(newE);
  };

  const executeEquation = () => {
    //todo
    const currentE = equation + display;
    const answer = "this is your answer";
    setDisplay(answer);
    setEquation("");
  };

  const handleSymbol = (symbol: Keys) => {
    setLastKey(symbol);
    switch (symbol) {
      case "+/-":
        setDisplay(display * -1);
        break;
      case "√":
        Math.sqrt(display);
        break;
      case "%":
        setDisplay(Number(display * 0.01).toFixed(2));
        break;
      case "MRC": //set memory as display and clear memory will need to build out this function
        setDisplay(memory);
        break;
      case "M-":
        setMemory(null);
        break;
      case "M+":
        setMemory(display);
        break;
      case "+":
        buildEquation("+");
        break;
      case "*":
        buildEquation("*");
        break;
      case "/":
        buildEquation("/");
        break;
      case "=":
        executeEquation();
        break;
      default:
        if (display !== "") {
          setDisplay(display + symbol);
        } else {
          setDisplay(symbol);
        }
    }
  };

  const calculatorButtons: KeyboardButton[] = [
    {
      text: "+/-",
      color: "red",
      function: () => handleSymbol("+/-")
    },
    {
      text: "√",
      color: "red",
      function: () => handleSymbol("√")
    },
    {
      text: "%",
      color: "red",
      function: () => handleSymbol("%")
    },
    {
      text: "÷",
      color: "red",
      function: () => handleSymbol("/")
    },
    {
      text: "MRC",
      color: "red",
      function: () => handleSymbol("MRC")
    },
    {
      text: "M-",
      color: "red",
      function: () => handleSymbol("M-")
    },
    {
      text: "M+",
      color: "red",
      function: () => handleSymbol("M+")
    },
    {
      text: "x",
      color: "red",
      function: () => handleSymbol("*")
    },
    {
      text: "7",
      color: "white",
      function: () => handleSymbol("7")
    },
    {
      text: "8",
      color: "white",
      function: () => handleSymbol("8")
    },
    {
      text: "9",
      color: "white",
      function: () => handleSymbol("9")
    },
    {
      text: "-",
      color: "red",
      function: () => handleSymbol("-")
    },
    {
      text: "4",
      color: "white",
      function: () => handleSymbol("4")
    },
    {
      text: "5",
      color: "white",
      function: () => handleSymbol("5")
    },
    {
      text: "6",
      color: "white",
      function: () => handleSymbol("6")
    },
    {
      text: "+",
      color: "red",
      function: () => handleSymbol("+")
    },
    {
      text: "1",
      color: "white",
      function: () => handleSymbol("1")
    },
    {
      text: "2",
      color: "white",
      function: () => handleSymbol("2")
    },
    {
      text: "3",
      color: "white",
      function: () => handleSymbol("3")
    },
    {
      text: "=",
      color: "red",
      function: () => handleSymbol("=")
    },
    {
      text: "on/c",
      color: "red",
      function: () => handleClear()
    },
    {
      text: "0",
      color: "white",
      function: () => handleSymbol("0")
    },
    {
      text: ".",
      color: "white",
      function: () => handleSymbol(".")
    }
  ];
  return calculatorButtons;
};
