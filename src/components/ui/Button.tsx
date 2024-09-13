import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonStyle? : string,
    children?: ReactNode,
    clickHandler? : () => void
}

function Button({
  buttonStyle = "",
  children,
  clickHandler = () => {},
  ...props
} : ButtonProps) {
  return (
    <button className={`${buttonStyle}`} onClick={clickHandler} {...props}>
      {children}
    </button>
  );
}

export default Button;