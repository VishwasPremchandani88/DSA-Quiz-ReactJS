import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Output from './results';
import questions from './questions';

function DsaForm({ userAnswers, setUserAnswers, questions }) {
  const handleOptionSelect = (questionIndex, choice) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = choice;
    setUserAnswers(updatedAnswers);
  };

  return (
    <>
      <h1 className="text-center" style={{ background: '#fccb06' }}>
        DSA Quiz
      </h1>
      <div className="container">
      <form className="form-horizontal">
          {questions.map((q, index) => (
            <div key={index}>
              <label>{`${index + 1}. ${q.question}`}</label>
              <div className="sublabels">
                {q.choices.map((choice, choiceIndex) => (
                  <label key={choiceIndex} style={{ display: 'block', margin: '5px 0' }}>
                    <input
                      type="radio"
                      name={`question ${index + 1}`}
                      value={choice}
                      onChange={() => handleOptionSelect(index, choice)}
                    />
                    {choice}
                  </label>
                ))}
              </div>
              <br />
            </div>
          ))}
          <Link to="/results" style={{ textDecoration: 'none' }}>
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

function App() {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));

  return (
      <Routes>
        <Route path="/" element={<DsaForm questions={questions} userAnswers={userAnswers} setUserAnswers={setUserAnswers} />} />
        <Route path="/results" element={<Output questions={questions} userAnswers={userAnswers} />} />
      </Routes>
  );
}

export default App;