import React from "react";
const TextInput = (props: {
  placeholder: string;
  inputClassNames: Array<string>;
  containerClassNames: Array<string>;
  id: string;
  name: string;
  type?: string;
}): JSX.Element => {
  const { placeholder, inputClassNames, containerClassNames, type, id, name } =
    props;
  return (
    <div className={containerClassNames.join(" ")}>
      <div className="mt-1 w-full relative rounded-md shadow-sm">
        <input
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