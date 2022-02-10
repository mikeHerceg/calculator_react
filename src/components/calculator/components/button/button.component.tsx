import React from "react";
import styles from "./button.modules.scss";
interface ButtonProps {
  onClick: Function;
  text: String;
  color: "white" | "red";
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  color,
  ...props
}) => {
  const handleClick = () => {
    onClick();
  };
  const classNames = `${
    color === "red" ? styles["red-button"] : styles["white-button"]
  } ${styles.button}`;

  return (
    <button {...props} className={classNames} onClick={handleClick}>
      {text}
    </button>
  );
};
