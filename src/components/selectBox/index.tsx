/* eslint-disable @typescript-eslint/no-explicit-any */
import { styles } from "./styles.css";

type selectBoxType = {
  options: {
    value: string;
    label: string;
  }[];
  onChange?: (data?: any) => void;
  className?: string;
  labelClassName?: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
};

export default function SelectBox({
  label = "",
  options = [],
  onChange = () => {},
  className = "",
  required = false,
  placeholder = "",
  labelClassName = "",
}: selectBoxType) {
  return (
    <div className="w-full min-w-[100px]">
      {label && (
        <label
          className={`${styles.label} ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <select
        id="countries"
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className={`${styles.default} ${className} w-full`}
      >
        <option disabled defaultChecked>
            {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index+ Date.now()} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
