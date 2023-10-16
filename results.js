import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from 'react-router-dom';
import Logic from './scores';

import questions from './questions'; 

function Output({ userAnswers }) {
  const logic = Logic({ userAnswers, questions }); 

  const score = logic.calculateScore(); 

  return (
    <>
      <h1 className="text-center" style={{ background: '#fccb06' }}>DSA Quiz</h1>
      <div className='container'>
        <div className='header'>
          <h1>Results</h1>
          <h3 style={{ border: '4px solid blue', display: 'inline-block', padding: '10px 20px', backgroundColor: '#e5fcf5', borderRadius: '10px', fontSize: '24px', color: '#333' }}>
              {score}/6
          </h3>
        </div>
        <form className="form-horizontal"></form>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <button className='btn btn-default'>
            back
          </button>
        </Link>
      </div>
    </>
  );
}

export default Output;
