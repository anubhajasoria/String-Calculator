import React, { useState } from "react";
import { add } from "./helper/Logic";

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
      setResult(null);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-gray-500 to-gray-600 flex flex-col items-center justify-center">
      <p className="">String Calculator</p>
      <div className="flex flex-col justify-start mt-4">
        <input
          type="text"
          value={input}
          className="p-2 rounded-xl "
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers"
        />
        <button
          className="rounded-xl bg-indigo-500 text-white py-2 mt-4"
          onClick={handleCalculate}
        >
          Calculate
        </button>
        {error && <p>{error}</p>}
        {result !== null && !error && (
          <p className="mt-4">
            Result: <strong>{result}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
