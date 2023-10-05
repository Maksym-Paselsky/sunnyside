import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
}

export default function Button({
  text,
  onClick,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button type="button" {...rest} onClick={onClick}>
      {text}
    </button>
  );
}
