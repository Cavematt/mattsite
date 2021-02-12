import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './Owasp.css'

function SecurityTen() {
  const [show, setShow] = useState(false);

  return (
    <>
    <div className="allText">
      <Alert show={show} variant="success">
        <div className="button">
          <p onClick={() => setShow(false)} variant="flat" size="xxl">
            Close me
          </p>
        </div>
        <Alert.Heading className="bimbo">Insufficient Logging and Monitoring</Alert.Heading>
        <p className="bimbo">
          Logging: when an issue or event happens then a log event is created
Monitoring: is when the extra step happens to actually look at the logs
A failed login to your web app should create an event in your web application and should have someone to monitor those logs.
Things to log are on OWASP for items to log, normally warnings, error messages, alert thresholds set appropriatly, any login faliure, server log faliure and contain sufficient content for you to be able to investigate and be in a usable format Not too much content, but not too little. Dont want to have the log files for anyone else to be able to access as then an attacker will know where to attack. Usually companies dont notice breaches for over 6 months. Must be a response plan in case something bad happens. Monitoring can be in person or automated, but ideally in person. 
        </p>
        </Alert>
        {!show && <p className="button" onClick={() => setShow(true)} variant="flat" size="xxl">Number Ten</p>}
    </div>
    </>
  );
}

export default SecurityTen;
