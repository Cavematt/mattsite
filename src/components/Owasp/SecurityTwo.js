import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './Owasp.css'

function SecurityTwo() {
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
        <Alert.Heading className="bimbo">Broken Authentication</Alert.Heading>
        <p className="bimbo">
It is where a user or malicious actor can access your application without the correct authentication. The usernames and passwords are stored in a database. If the session is authenticated there is a session ID given to the user to allow the user to access the web app. The main types are:
credential stuffing – known list of username and passwords often from other companies and “stuffs” them into the UN/PW boxes of your app to try and get access. Often done by automation and can be stopped by putting limits in place of failed logins. 
Automated attacks – similar to cred stuffing but is automated and random UN & PW.
Default passwords – Using things such as admin and admin which is the default from some manufacturers. 
Another way is using communal computers and the next user accessing a web app using the previous users session ID.
One of the best ways to stop is using multi-factor authentication/2fa. This often works by sending a text message to a user to confirm its them. Another way is password checking and stopping people using like the 5,000 most common passwords and encouraging password complexity such as having symbols.         </p>
        </Alert>
        {!show && <p className="button" onClick={() => setShow(true)} variant="flat" size="xxl">Number Two</p>}
    </div>
    </>
  );
}

export default SecurityTwo;
