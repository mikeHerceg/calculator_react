import styles from "./calculator.module.scss";
import React, { useContext } from "react";
import { Keyboard } from "./components/keyboard";
import { Screen } from "./components/screen";
import { CalculatorContext } from "./calculator.context";

export const Calculator = () => {
  const { equation } = useContext(CalculatorContext);
  return (
    <div className={styles.calculator}>
      <Screen />
      <Keyboard />
      {equation}
    </div>
  );
};
