import React from "react";

function Button({ buttonText }) {
  const changeColour = () => {
    document.body.style.backgroundColor = buttonText.toLowerCase();
  };

  return (
    <div>
      <button
        className=" text-white font-bold py-2 px-4 rounded"
        onClick={changeColour}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
