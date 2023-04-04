import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonSet?: string;
  icon?: ReactNode;
  label?: string;
}
const Button: FC<ButtonProps> = ({ buttonSet, label, ...props }) => {
  return (
    <button
      className={`btn flex w-1/2 text-xs md:text-base md:w-1/4 lg:w-1/6 mb-5 border-none ${buttonSet}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
