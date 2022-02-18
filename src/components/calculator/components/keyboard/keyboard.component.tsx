import React, { useContext } from "react";
import { Button } from "../button";
import { KeyboardButton } from "./keyboardButton.type";
import { useKeyboardButtons } from "./keyboard.hooks";
import styles from "./keyboard.module.scss";
export const Keyboard = () => {
  const calculatorButtons = useKeyboardButtons();
  return (
    <div className={styles.keyboard}>
      {calculatorButtons.map((button: KeyboardButton) => {
        return (
          <Button
            key={button.text}
            text={button.text}
            color={button.color}
            onClick={button.function}
          />
        );
      })}
    </div>
  );
};
