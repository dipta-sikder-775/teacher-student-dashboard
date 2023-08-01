import { forwardRef } from "react";

interface IOption {
  name: string;
  value: string | number;
}

interface IInput
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  errorMessage?: string;
  label: string;
  id?: string;
  options?: IOption[];
}

const Select = forwardRef<HTMLSelectElement, IInput>(
  (
    { label = "Title", id = "", errorMessage = "", options = [], ...restProps },
    ref,
  ) => {
    const processedID = id?.split(" ").join("_");
    return (
      <div
        className={errorMessage ? "select-container_error" : "select-container"}
      >
        <label
          htmlFor={id ? processedID : restProps.name}
          className={`${
            errorMessage ? "input_label_error_style" : "input_label_base_style"
          }`}
        >
          {label}
        </label>

        <select
          ref={ref}
          id={id ? processedID : restProps.name}
          className={`mt-4 ${
            errorMessage
              ? "input_select_error_style"
              : "input_select_base_style"
          }`}
          {...restProps}
        >
          <option disabled={true} value="">
            {restProps.placeholder}
          </option>

          {options?.map(({ name, value }, idx) => (
            <option key={`${name}_${idx}`} value={value}>
              {name}
            </option>
          ))}
        </select>

        {!!errorMessage && (
          <p className="input_error_info">
            <span className="font-medium">Oh, snapp!</span> {errorMessage}.
          </p>
        )}
      </div>
    );
  },
);

export default Select;
