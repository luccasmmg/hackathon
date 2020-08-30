import React from "react";

const InputText = ({ setField, field, placeholder, name }) => {
  return (
    <div className={`flex-1 border-b border-blue-500 py-2 px-2 mx-2`}>
      <label className="block">
        <span className="w-full text-gray-600">{name}</span>
        <br></br>
        <input
          onChange={(e) => setField(e.target.value)}
          value={field}
          className={`appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none`}
          type="text"
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

export default InputText;
