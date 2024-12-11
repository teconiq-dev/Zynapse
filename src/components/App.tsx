"use client";
import "../css/App.css";
import { CountdownTimer } from "./countdown";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-20">
      <div className="max-w-6xl mb-10 flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Zynapse 2025</h1>
        <p>
          The Department of Computer Science at Bharata Mata College is thrilled
          to present Zynapse 2025, an exciting tech fest aimed at fostering
          innovation, creativity, and collaboration among students and tech
          enthusiasts. This year's event promises to be an enriching experience
          filled with hackathons, competitions and workshops.
        </p>
      </div>
      <CountdownTimer />
    </div>
  );
}

export default App;
