import React, { InputHTMLAttributes, useId } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelIcon?: string;
  type?: string;
  containerStyle?: string;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label = "",
    labelIcon = "",
    type = "text",
    containerStyle = "w-full",
    className = "",
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className={`${containerStyle}`}>
      <div className="flex items-center justify-center">
        {labelIcon && (
          <i className={`pi pi-${labelIcon} inline-block ml-1 mr-2 text-md`}></i>
        )}
        {label && (
          <label className="flex-1" htmlFor={id}>
            {label}
          </label>
        )}
      </div>
      <input className={className} type={type} ref={ref} id={id} {...props} />
    </div>
  );
});

export default Input;