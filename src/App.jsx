import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("olive");

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

      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "palevioletred" }}
              onClick={() => setColor("palevioletred")}
            >
              Pale Violet Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "brown" }}
              onClick={() => setColor("brown")}
            >
              Brown
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "mediumslateblue" }}
              onClick={() => setColor("mediumslateblue")}
            >
              Medium Slate Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
