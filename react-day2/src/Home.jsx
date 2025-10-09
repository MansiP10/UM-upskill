import React, { useState } from "react";
// Import the Gemini SDK or use fetch if SDK is unavailable
// import GeminiSDK from "@gemini/sdk"; // Uncomment if a library exists

const App = () => {
  const [skill, setSkill] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Replace this with your Gemini API key
  const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

  const fetchQuestions = async () => {
    setLoading(true);
    setError(null);
    setQuestions([]); // Clear previous questions

    try {
      // Example API call for Gemini
      const response = await fetch("https://api.gemini.com/v1/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`, // Use your Gemini API key
        },
        body: JSON.stringify({
          prompt: `Generate multiple-choice questions for the skill: ${skill}. Each question should have 4 options and indicate the correct answer.`,
          maxTokens: 500,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch questions from Gemini.");
      }

      const data = await response.json();
      const questionsGenerated = data.questions || []; // Adjust based on Gemini's response format
      setQuestions(questionsGenerated);
    } catch (err) {
      setError("Failed to fetch questions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Skill-Based MCQ Generator</h1>
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Enter skill name (e.g., JavaScript)"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchQuestions}
          disabled={loading || !skill}
          className="mt-4 w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Fetching..." : "Get Questions"}
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <div className="mt-6">
          {questions.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Generated Questions</h2>
              <ul className="list-disc list-inside">
                {questions.map((q, index) => (
                  <li key={index} className="text-gray-600 mb-2">
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;