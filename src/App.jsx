import { useState } from "react";
import Title from "./components/Title";
import "./App.css";

function App() {
  const stylesheet = {
    border: "none",
    borderBottom: "1px dotted black",
    outline: "none",
    padding: ".35rem 0",
  };

  return (
    <>
      <div className="container text-center">
        <Title classes={"subtile"} text={"Name"} />
        <Title classes={"subtile"} text={"Date"} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo
          asperiores magni ad consequuntur, aspernatur ab esse, iure fugiat
          corporis nam voluptatibus ea deserunt aperiam! Est placeat magni sint
          beatae.
        </p>

        <footer
          className="d-flex"
          style={{
            justifyContent: "space-around",
            position: "relative",
            top: "40vh",
          }}
        >
          <input type="date" value={""} style={stylesheet} />
          <input type="text" value={""} style={stylesheet} />
        </footer>
      </div>
    </>
  );
}

export default App;
