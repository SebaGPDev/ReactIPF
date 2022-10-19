import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Saludar from "./components/Saludar";

function App() {
  return (
    <div>
      <Saludar name="Seba" surname="prieto">
        <h3>Vue es mejor</h3>
      </Saludar>
      <Button texto="jaja" color="red"></Button>
    </div>
  );
}

export default App;
