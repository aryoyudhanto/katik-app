import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonSet?: string;
  icon?: ReactNode;
  label?: string;
}
const Button: FC<ButtonProps> = ({ buttonSet, label, ...props }) => {
  return (
    <button
      className={`btn ${buttonSet}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
