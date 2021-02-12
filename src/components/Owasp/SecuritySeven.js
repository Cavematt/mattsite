import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './Owasp.css'

function SecuritySeven() {
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
        <Alert.Heading className="bimbo">Cross Site Scripting (XSS)</Alert.Heading>
        <p className="bimbo">
In effect it is client side code injection. Malicious actor wants code to be executed which in turn sends all your data to the actor. It takes 3 things to happen, an attacker, web application and a victim. Attacker sends POST script to web app. In effect wants to get hold of the victims cookie to then use the web app as the victim. The victim sends a GET request to the web app, maybe as wanting a new comment, then it sends the attackers script to the victim, then executes. The script will say that the cookie is to be sent to the attacker. The browser of the victim browser has to execute it. This type of attack is now less common due to better modern browser. Also when building web app, seperate user data from internal data. A WAF can also help.        </p>
        </Alert>
        {!show && <p className="button" onClick={() => setShow(true)} variant="flat" size="xxl">Number Seven</p>}
    </div>
    </>
  );
}

export default SecuritySeven;
