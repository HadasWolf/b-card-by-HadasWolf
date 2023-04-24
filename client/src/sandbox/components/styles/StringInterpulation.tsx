import React from "react";

const StringInterpulation = () => {
  const x = "hallo";
  console.log("in the correct partof the compontnent");

  return (
    <div>
      {x} world
      <br />
      {6 * 5}
    </div>
  );
};

export default StringInterpulation;
