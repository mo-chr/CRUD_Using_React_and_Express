import "./App.css";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [wage, setWage] = useState(0);
  const [position, setPosition] = useState("");

  const displayInfo = () => {
    console.log(name + " " + dob + " " + country + " " + wage + " " + position);
  };
  return (
    <div className="App">
      <div className="Information">
        <label> Name </label>
        <input
          type="text"
          name="Name"
          id="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label>Date of Birth</label>
        <input
          type="date"
          name="Dob"
          id="dob"
          onChange={(event) => {
            setDob(event.target.value);
          }}
        />

        <label> Country</label>
        <input
          type="text"
          name="Country"
          id="country"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />

        <label> Wage(Monthly in $)</label>
        <input
          type="number"
          name="Wage"
          id="wage"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />

        <label>Position</label>
        <input
          type="text"
          name="Position"
          id="position"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />

        <button className="submitBtn" onClick={displayInfo}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
