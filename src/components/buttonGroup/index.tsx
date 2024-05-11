import React, { useState } from "react";
import Button from "../button";

type buttonGroupType = {
  options: React.ReactNode[];
  className?: string;
  buttonClassName?: string;
  style?: React.CSSProperties;
  onClick?: (data?: any) => void;
};

export default function ButtonGroup({
  options,
  className = "",
  buttonClassName = "",
  style = {},
  onClick = () => {},
}: buttonGroupType) {
  const [active, setActive] = useState<null | number>(1);

  return (
    <div className={`${className}`} style={style}>
      {options?.map((option: React.ReactNode, index: number) => {
        return (
          <Button
            variant={active === index ? "primary" : "secondary"}
            onClick={() => {
              setActive(index);
              onClick(index);
            }}
            className={`rounded-none !m-0 ${buttonClassName}`}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
}
