import { FC, InputHTMLAttributes } from "react";

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputSet?: string;
  labelSet?: string;
}

export const CustomInput: FC<PropsInput> = ({
  label,
  inputSet,
  labelSet,
  ...props
}) => {
  return (
    <>
      <label className={`text-sm md:text-lg ${labelSet}`}>{label}</label>
      <input
        className={`input input-bordered w-full bg-white  ${inputSet}`}
        {...props}
      />
    </>
  );
};
