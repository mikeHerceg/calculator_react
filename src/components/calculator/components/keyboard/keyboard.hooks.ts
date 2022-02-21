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
  | "-"
  | "+"
  | "="
  | "on/c"
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

  const isNumber = (value: any) => Boolean(typeof value === "number");

  const [lastKey, setLastKey] = useState<Keys | number>();

  const handleClear = () => {
    setDisplay(0);
    //only clear equation if display is empty, clicked twice
    if (display !== 0) return;
    setEquation();
  };

  const buildEquation = (symbol: Keys) => {
    //dont add if there isn't a display value to equate
    if (display === 0) return;
    if (!equation) {
      setEquation([display, symbol]);
      return;
    }
    const tempEquation = [...equation, display];
    if (tempEquation.length >= 3) {
      setEquation([evalEquation(tempEquation, tempEquation[1]), symbol]);
      return;
    }
    setEquation([...equation, display, symbol]);
  };

  const evalEquation = (
    equation: Array<any>,
    operator: "+" | "-" | "/" | "*"
  ) => {
    return equation
      .filter((item: any) => item !== operator)
      .reduce((a: number, b: number) => {
        switch (operator) {
          case "+":
            return a + b;
          case "-":
            return a - b;
          case "*":
            return a * b;
          case "/":
            return a / b;
        }
      });
  };

  const executeEquation = () => {
    //todo
    const currentEquation = [...equation, display];
    const answer = evalEquation(currentEquation, currentEquation[1]);
    setDisplay(answer);
    setEquation([]);
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
        setDisplay(display * 0.01);
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
      case "-":
        buildEquation("-");
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
    }
  };

  const handleNumber = (number: number) => {
    setLastKey(number);
    if (!isNumber(lastKey)) {
      setDisplay(number);
      return;
    }
    const newDisplay = display.toString() + number.toString();
    setDisplay(parseInt(newDisplay));
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
      function: () => handleNumber(7)
    },
    {
      text: "8",
      color: "white",
      function: () => handleNumber(8)
    },
    {
      text: "9",
      color: "white",
      function: () => handleNumber(9)
    },
    {
      text: "-",
      color: "red",
      function: () => handleSymbol("-")
    },
    {
      text: "4",
      color: "white",
      function: () => handleNumber(4)
    },
    {
      text: "5",
      color: "white",
      function: () => handleNumber(5)
    },
    {
      text: "6",
      color: "white",
      function: () => handleNumber(6)
    },
    {
      text: "+",
      color: "red",
      function: () => handleSymbol("+")
    },
    {
      text: "1",
      color: "white",
      function: () => handleNumber(1)
    },
    {
      text: "2",
      color: "white",
      function: () => handleNumber(2)
    },
    {
      text: "3",
      color: "white",
      function: () => handleNumber(3)
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
      function: () => handleNumber(0)
    },
    {
      text: ".",
      color: "white",
      function: () => handleSymbol(".")
    }
  ];
  return calculatorButtons;
};
