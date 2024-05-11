import React from 'react'

type dividerType = {
    className?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
}

export default function Divider({className="", onClick = () => {}, style = {}}:dividerType) {
  return (
    <hr onClick={onClick} style={style} className={`h-[2px] mt-4 my-3 bg-[#2E3791] border-0 dark:bg-gray-700 ${className}`} />
  )
}
