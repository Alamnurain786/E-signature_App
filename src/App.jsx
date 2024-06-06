import { useState } from "react";
import Title from "./components/Title";
import "./App.css";

function App() {
  const [name, setName] = useState("Your Signature");
  const [date, setDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const stylesheet = {
    border: "none",
    borderBottom: "1px dotted black",
    outline: "none",
    padding: ".35rem 0",
  };
  document.body.style.background = "#eee";
  return (
    <>
      <div className="box text-center">
        <Title classes={"subtile"} text={name} />
        <Title classes={""} text={!date ? "DOB" : date} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo
          asperiores magni ad consequuntur, aspernatur ab esse, iure fugiat
          corporis nam voluptatibus ea deserunt aperiam! Est placeat magni sint
          beatae.
        </p>

        <footer className="d-flex">
          <input
            type="date"
            value={date}
            style={stylesheet}
            onChange={handleDateChange}
          />
          <input
            type="text"
            value={name}
            style={stylesheet}
            onChange={handleNameChange}
          />
        </footer>
      </div>
    </>
  );
}

export default App;
