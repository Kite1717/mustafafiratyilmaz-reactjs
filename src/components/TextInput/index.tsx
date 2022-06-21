import React from "react";
const TextInput = (props: {
  placeholder: string;
  inputClassNames: Array<string>;
  containerClassNames: Array<string>;
  id: string;
  name: string;
  type?: string;
  currentValue: string;
  onChange?: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}): JSX.Element => {
  const {
    placeholder,
    inputClassNames,
    onChange,
    containerClassNames,
    type,
    id,
    name,
    currentValue,
    onBlur,
  } = props;
  return (
    <div className={containerClassNames.join(" ")}>
      <div className="mt-1 w-full relative rounded-md shadow-md">
        <input
          value={currentValue}
          onChange={onChange}
          onBlur={onBlur}
          type={type || "text"}
          name={name}
          id={id}
          className={`focus:ring-indigo-300 focus:border-indigo-300 block w-full sm:text-sm border-gray-300 rounded-md ${inputClassNames.join(
            " "
          )}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextInput;
