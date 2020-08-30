import React from "react";

const InputSelect = ({ setField, field, name, possibilities }) => {
  return (
    <div className={`max-w-sm flex-1 border-b border-blue-500 py-2 px-2 mx-2`}>
      <label className="block">
        <span className="w-full text-gray-600">{name}</span>
        <br></br>
        <select
          onChange={(e) => setField(e.target.value)}
          value={field}
          className="text-blue-500 block appearance-none w-full bg-white border-none px-4 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline"
        >
          {possibilities.map((possibility) => {
            return <option value={possibility}>{possibility}</option>;
          })}
        </select>
      </label>
    </div>
  );
};

export default InputSelect;
