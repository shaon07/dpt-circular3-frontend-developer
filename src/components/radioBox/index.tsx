import React from "react";
import { styles } from "./styles.css";

type radioBoxType = {
  options: {
    value: string;
    label: string;
  }[];
  className?: string;
  onChange?: (data?: any, value?: any) => void;
  label?: string;
};

export default function RadioBox({
  options = [],
  label = "",
  className = "",
  onChange = () => {},
}: radioBoxType) {
  return (
    <div className="flex items-center gap-2">
      {label && <label className="font-medium">{label}</label>}
      {options.map((option) => (
        <div className="flex items-center ">
          <input
            type="radio"
            name="dd"
            className={`${styles.input}`}
            onChange={(e) => onChange(e.target.checked, option)}
          />
          <label className={`${styles.label} ${className}`}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}
