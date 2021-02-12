import React from 'react';
import './Owasp.css';
import { Link } from 'react-router-dom';
import SecurityNine from './SecurityNine'
import SecurityEight from './SecurityEight'
import SecurityTen from './SecurityTen';
import SecuritySeven from './SecuritySeven';
import SecuritySix from './SecuritySix';
import SecurityFive from './SecurityFive';
import SecurityFour from './SecurityFour';
import SecurityThree from './SecurityThree';
import SecurityTwo from './SecurityTwo';
import SecurityOne from './SecurityOne';




function Owasp() {

  return (
    <>
    <div className="securityText">
      <h1>Open Web Application Security Project (OWASP)</h1>
      <p>Below are the OWASP top 10 list of the most common security breaches for all web developers and security professionals alike to know and be sure to take the Quiz afterwards!</p>
      <Link className="goQuiz" to="/Owaspquiz">Quiz</Link>
    </div>
    <SecurityTen />
    <SecurityNine />
    <SecurityEight />
    <SecuritySeven />
    <SecuritySix />
    <SecurityFive />
    <SecurityFour />
    <SecurityThree />
    <SecurityTwo />
    <SecurityOne />
    </>
  );
}

export default Owasp
