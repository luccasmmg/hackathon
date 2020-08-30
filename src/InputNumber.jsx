import React from "react";

const InputNumber = ({ setField, field, placeholder, name }) => {
  return (
    <div className={`max-w-sm flex-1 border-b border-blue-500 py-2 px-2 mx-2`}>
      <label className="block">
        <span className="w-full text-gray-600">{name}</span>
        <br></br>
        <span
          className={`${
            !isNaN(field) || field === "" ? "hidden" : ""
          } w-full text-blue-600`}
        >
          Digite um número válido
        </span>
        <input
          onChange={(e) => setField(e.target.value)}
          value={field}
          className={`appearance-none bg-transparent border-none ${
            isNaN(field) ? "text-blue-900" : "text-gray-600"
          } mr-3 py-1 px-2 leading-tight focus:outline-none`}
          type="text"
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

export default InputNumber;
