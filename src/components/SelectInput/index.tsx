import React from "react";
const TextInput = <T extends { id?: string; name?: string }>(props: {
  placeholder: string;
  inputClassNames: Array<string>;
  containerClassNames: Array<string>;
  id: string;
  name: string;
  options: Array<T>;
  onChange?: (e?: React.ChangeEvent<HTMLSelectElement>) => void;
  currentValue: string;
}): JSX.Element => {
  const {
    placeholder,
    containerClassNames,
    inputClassNames,
    id,
    name,
    options,
    onChange,
    currentValue,
  } = props;
  return (
    <div className={containerClassNames.join(" ")}>
      <div className="mt-1 relative rounded-md shadow-sm">
        <select
          onChange={onChange}
          value={currentValue}
          name={name}
          id={id}
          className={`focus:ring-indigo-300 focus:border-indigo-300 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md ${inputClassNames.join(
            " "
          )}`}
        >
          <option value="all">{placeholder}</option>

          {options.map((option: T) => (
            <option key={`category-${option?.id}`} value={option?.id}>
              {option?.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TextInput;
