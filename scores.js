import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Logic = ({ questions, userAnswers }) => {
  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correctChoice) {
        score++;
      }
    }
    return score;
  };

  return {
    calculateScore,
  };
};

export default Logic;
