import React, { useContext } from "react";
import { CalculatorContext } from "../../calculator.context";
import styles from "./screen.module.scss";
export const Screen = () => {
  const { display } = useContext(CalculatorContext);
  return (
    <div className={styles.screen}>
      <span className={styles.block}></span>
      <span className={styles.display}>{display}</span>
      <span className={styles.block}></span>
    </div>
  );
};
