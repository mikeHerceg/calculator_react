import React, { useContext, useState } from "react";
import { CalculatorContext } from "../../calculator.context";
import { KeyboardButton, Keys, Operators } from "./keyboard.types";

export const useKeyboardButtons = () => {
  const {
    display,
    setDisplay,
    setMemory,
    memory,
    setEquation,
    equation
  } = useContext(CalculatorContext);

  const [lastKey, setLastKey] = useState<Keys | number>();

  const isNumber = (value: any) => Boolean(typeof value === "number");

  const evalEquation = (equation: Array<number>, operator: Operators) => {
    return equation
      .filter((item: any) => item !== operator)
      .reduce((a: number, b: number) => {
        switch (operator) {
          case Operators.addition:
            return a + b;
          case Operators.subtraction:
            return a - b;
          case Operators.multiplication:
            return a * b;
          case Operators.division:
            return a / b;
        }
      });
  };

  const handleClear = () => {
    setDisplay(0);
    //only clear equation if display is empty, clicked twice
    if (display !== 0) return;
    setEquation([]);
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

  const executeEquation = () => {
    const currentEquation = [...equation, display];
    const answer = evalEquation(currentEquation, currentEquation[1]);
    setDisplay(answer);
    setEquation([]);
  };

  const handleMemory = () => {
    if (display !== memory && memory) {
      setDisplay(memory);
      return;
    }
    setMemory(null);
  };

  const handleSymbol = (symbol: Keys) => {
    setLastKey(symbol);
    switch (symbol) {
      case "+/-":
        setDisplay(display * -1);
        break;
      case "√":
        setDisplay(Math.sqrt(display));
        break;
      case "%":
        setDisplay(display * 0.01);
        break;
      case "MRC":
        handleMemory();
        break;
      case "M-":
        setMemory(null);
        break;
      case "M+":
        setMemory(display);
        break;
      case "+":
        buildEquation(Operators.addition);
        break;
      case "-":
        buildEquation(Operators.subtraction);
        break;
      case "*":
        buildEquation(Operators.multiplication);
        break;
      case "/":
        buildEquation(Operators.division);
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
