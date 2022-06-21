import React from "react";
const TextInput = <T extends { id?: string; name?: string }>(props: {
  placeholder: string;
  inputClassNames: Array<string>;
  containerClassNames: Array<string>;
  id: string;
  name: string;
  options: Array<T>;
}): JSX.Element => {
  const {
    placeholder,
    containerClassNames,
    inputClassNames,
    id,
    name,
    options,
  } = props;
  return (
    <div className={containerClassNames.join(" ")}>
      <div className="mt-1 relative rounded-md shadow-sm">
        <select
          name={name}
          id={id}
          className={`focus:ring-indigo-300 focus:border-indigo-300 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md ${inputClassNames.join(
            " "
          )}`}
        >
          <option value="" disabled selected hidden>
            {placeholder}
          </option>

          {options.map((option: T) => (
            <option value={option?.id}>{option?.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TextInput;
