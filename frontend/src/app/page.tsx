
"use client";

import { useState } from "react";

export default function Home() {
  const [numbers, setNumbers] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/process-numbers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: numbers }),
    });
  };

  const handleShowPrevious = async () => {
    window.location.href = "/previous-trees";
  };

  return (
    <div className="space-y-8">
      <section className="glass-card">
        <h1 className="text-3xl font-semibold mb-4">🌳 Binary Tree Visualizer</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Enter numbers separated by commas to visualize your binary search tree.
        </p>
        <input
          type="text"
          placeholder="e.g. 7,3,9,1,4"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-white dark:bg-zinc-900 dark:text-white border focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="mt-4 flex gap-4">
          <button onClick={handleSubmit} className="btn-toggle">
            Submit
          </button>
          <button onClick={handleShowPrevious} className="btn-toggle bg-gradient-to-r from-green-400 to-emerald-500">
            Show Previous
          </button>
        </div>
      </section>
    </div>
  );
}
