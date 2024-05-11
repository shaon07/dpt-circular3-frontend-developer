/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { styles } from "./styles.css";

type ButtonType = {
  variant?: "primary" | "secondary" | "outlined";
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: (data?: any) => void;
  className?: string;
  style?: React.CSSProperties;
};

export default function Button({
  variant = "primary",
  type = "button",
  children,
  className = "",
  style = {},
  onClick = () => {},
}: ButtonType) {
  return (
    <button
      type={type}
      style={style}
      onClick={onClick}
      className={`${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
