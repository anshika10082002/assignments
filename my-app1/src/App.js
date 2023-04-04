import React, { useState } from "react"; //,{useState}
import "./index.css";

function ShowTable() {
  const [number, setNumber] = useState("");
  const [table, setTable] = useState([]);

  const handleEvent = (event) => {
    const value = event.target.value;
    setNumber(value);

    if (!isNaN(value)) {
      const tableData = [];
      for (let i = 1; i <= 10; i++) {
        tableData.push(`${value * i}`); //${value} * ${i}=
      }
      setTable(tableData);
    } else {
      setTable([]);
    }
  };
  return (
    <div className="container">
      <input
        type="text"
        value={number}
        onChange={handleEvent}
        style={{
          width: "200px",
          height: "50px",
          background: "#d1cfe2",
          border: "3px solid",
        }}
      />
      <table className="table">
        <tbody>
          {table.map((data, index) => (
            <tr key={index}>
              <td>{data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ShowTable;
