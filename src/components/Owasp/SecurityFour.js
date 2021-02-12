import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './Owasp.css'

function SecurityFour() {
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
        <Alert.Heading className="bimbo">XML External Entities</Alert.Heading>
        <p className="bimbo">
            Takes advantage of XML data parsing which is part of a web application. Often the XML document contains refrences to other documents/entities. Which can allow a bad payload to run if a malicious actor manages to get code into the other documents/entities. If XML incorrectly configured by allowing XXE enabled by default. One example is making a loop in the code which causes the server to consume large amounts of memory.
Best thing to do is disable XXE completely if possible, or as much as possible. Also, similar to injection is to validate queries. If all of this is unable to be done a web application firewall can be installed. 
        </p>
        </Alert>
        {!show && <p className="button" onClick={() => setShow(true)} variant="flat" size="xxl">Number Four</p>}
    </div>
    </>
  );
}

export default SecurityFour;
