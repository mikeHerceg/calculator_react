import styles from "./calculator.module.scss";
import React from "react";
import { Keyboard } from "./components/keyboard";
import { Screen } from "./components/screen";
import { CalculatorContext } from "./calculator.context";

export const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <Screen />
      <Keyboard />
    </div>
  );
};
