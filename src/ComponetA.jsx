import React from "react";

const ComponentA = ({ person }) => {
  return (
    <select>
      <option value="" disabled selected>
        Select a surname
      </option>
      {person.map((p, index) => (
        <option key={index} value={p.surname}>
          {p.surname}
        </option>
      ))}
    </select>
  );
};

export default ComponentA;
