import React from "react";

const JustButton = ({ flag, setFlag, text }) => {
  return (
    <button
      onClick={() => {
        setFlag(!flag);
      }}
      className={`${
        flag ? "opacity-50" : ""
      } border shadow-xl w-11/12 text-sm m-4 bg-blue-500 hover:bg-blue-700 text-white folt-bold py-2 px-4`}
    >
      {text}
    </button>
  );
};

export default JustButton;
