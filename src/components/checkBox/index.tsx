import { styles } from "./styles.css";

type checkboxType = {
    label?: string;
    className?: string;
    onChange?: (data?: any) => void;
    disabled?: boolean;
}

export default function CheckBox({label = "", className = "", onChange = () => {}, disabled = false}:checkboxType) {

  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        disabled={disabled}
        className={`${styles.default}`}
        onChange={(e) => onChange(e.target.checked)}
      />
      {
        label && (
          <label
            className={`${styles.label} ${className}`}
          >
            {label}
          </label>
        )
      }
    </div>
  );
}
