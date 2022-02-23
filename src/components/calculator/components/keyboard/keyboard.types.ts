export type Keys =
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

export enum Operators {
  addition = "+",
  subtraction = "-",
  multiplication = "*",
  division = "/"
}

export interface KeyboardButton {
  text: string;
  color: "red" | "white";
  function: () => void;
}
