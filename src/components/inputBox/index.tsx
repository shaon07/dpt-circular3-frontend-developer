import React from "react";
import { styles } from "./styles.css";

type inputBoxType = {
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  onChange?: (data?: any) => void;
  required?: boolean;
};

export default function InputBox({
  label = "",
  placeholder = "",
  type = "text",
  className = "",
  onChange = () => {},
  required = false,
}: inputBoxType) {
  return (
    <div className="w-full flex flex-col items-start">
      {label && (
        <label htmlFor="first_name" className={`${styles.label}`}>
          First name
        </label>
      )}
      <input
        type={type}
        className={`${styles.input} ${className}`}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
