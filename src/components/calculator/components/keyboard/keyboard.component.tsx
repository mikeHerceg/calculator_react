import React, { useContext } from "react";
import { Button } from "../button";
import { CalculatorContext } from "../../calculator.context";
export const Keyboard = () => {
  const { display, setDisplay, setMemory, memory } = useContext(
    CalculatorContext
  );

  interface KeyboardButton {
    text: string;
    color: "red" | "white";
    function: () => void;
  }

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
      function: () => setDisplay("/")
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
      function: () => setDisplay("*")
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
      function: () => setDisplay("-")
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
      function: () => setDisplay("+")
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
      function: () => setDisplay("=")
    },
    {
      text: "on/c",
      color: "red",
      function: () => setDisplay("")
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

  return (
    <>
      {calculatorButtons.map((button: KeyboardButton) => {
        return (
          <Button
            text={button.text}
            color={button.color}
            onClick={button.function}
          />
        );
      })}
    </>
  );
};
