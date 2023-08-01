import { forwardRef } from "react";

interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  errorMessage?: string;
  label: string;
  id?: string;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label = "Title", id = "", errorMessage = "",rightIcon, ...restProps }, ref) => {
    const processedID = id?.split(" ").join("_");
    return (
      <div>
        <label
          htmlFor={id ? processedID : restProps.name}
          className={`${
            errorMessage ? "input_label_error_style" : "input_label_base_style"
          }`}
        >
          {label}
        </label>
        <div className="relative">
          <input
            ref={ref}
            id={id ? processedID : restProps.name}
            className={`mt-4 w-full ${
              errorMessage
                ? "input_error_style input_placeholder_error_style"
                : "input_base_style input_placeholder_base_style"
            }`}
            {...restProps}
          />
          {!!rightIcon &&<span className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3.5">
            {rightIcon}
          </span>}
        </div>
        {!!errorMessage && (
          <p className="input_error_info">
            <span className="font-medium">Oh, snapp!</span> {errorMessage}.
          </p>
        )}
      </div>
    );
  },
);

export default Input;
