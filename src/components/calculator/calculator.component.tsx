import styles from "./calculator.module.scss";
import React from "react";
import { CalculatorContextProvider } from "./calculator.context";

export const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <CalculatorContextProvider>
        <>calculator</>
      </CalculatorContextProvider>
    </div>
  );
};
