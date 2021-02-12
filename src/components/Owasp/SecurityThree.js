import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './Owasp.css'

function SecurityThree() {
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
        <Alert.Heading className="bimbo">Sensitive Data Exposure</Alert.Heading>
        <p className="bimbo">
User information is stored on databases, often with different databases for different information. Such as one for user details, other for credit cards and on top of this is build a web app, for example a store. Problems can happen when pages are secured by different levels or types of security, or have unsecured areas of code or links, such as a CDN. Which can allow an attacker force down the security level on a page to allow them to access it. Another way is them finding a link to an secured or weakly secured customer information. 
To stop breaches, all pages should be secured by design and all customer information encrypted at rest, so if anyone does get access, it is all encrypted. If appropriate classify data as in credit cards should be more secure than an email address. In keeping with principles of GDPR all data should be kept only if necessary as data you dont have cant be stolen!        </p>
        </Alert>
        {!show && <p className="button" onClick={() => setShow(true)} variant="flat" size="xxl">Number Three</p>}
    </div>
    </>
  );
}

export default SecurityThree;
