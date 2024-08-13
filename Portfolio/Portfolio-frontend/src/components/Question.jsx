import React, { useState, useEffect } from "react";

export default function Question() {
  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await fetch("https://opentdb.com/api.php?amount=1&type=boolean");
      const data = await response.json();
      const result = data.results[0];
      setCategory(result.category);
      setQuestion(result.question);
      setAnswer(result.correct_answer);
    };
    fetchQuestion();
  }, []);

  function handleRevealAnswer() {
    setRevealed(true);
  }

  let revealedContent = revealed ? answer : "";

  return (
    <div className="question-container">
      <div className="question-category">{category}</div>
      <h4 className="question">{question}</h4>
      <div className="answer">{revealedContent}</div>
      <button type="button" onClick={handleRevealAnswer}>
        Reveal answer
      </button>
    </div>
  );
}
