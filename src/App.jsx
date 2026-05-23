import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="bg-gray-700">
        <div className="container">
          <h1 className="text-3xl font-bold text-white text-center my-4">
            My Background Changer Application
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
            <Button buttonText="Red" />
            <Button buttonText="Green" />
            <Button buttonText="Blue" />
            <Button buttonText="Yellow" />
            <Button buttonText="Purple" />
            <Button buttonText="Lavender" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
