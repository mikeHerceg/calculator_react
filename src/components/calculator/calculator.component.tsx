import styles from "./calculator.module.scss";
import React from "react";
import { Keyboard } from "./components/keyboard";
import { Screen } from "./components/screen";

export const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <>
        <Screen />
        <Keyboard />
      </>
    </div>
  );
};
