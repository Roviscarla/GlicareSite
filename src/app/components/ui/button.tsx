import ButtonProps from "@/app/models/button.interface";
import React from "react";

export function Button({
  children,
  classAttributes,
  onClick,
  type = "button",
}: ButtonProps) {
  const classMain =
    "xl:bg-dark-blue xl:hover:bg-blue-500 text-white font-bold py-2 px-4 rounded";

  return (
    <button
      className={`${classAttributes} ${classMain} `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
