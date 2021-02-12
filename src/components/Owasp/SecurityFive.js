import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './Owasp.css'

function SecurityFive() {
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
        <Alert.Heading className="bimbo">Access Control</Alert.Heading>
        <p className="bimbo">
Not the same as authentication (which verifies identity). Access control is about giving the user to correct resources and away from resources they shouldnt be able to access such as logs. Different users should be able to access different areas. Such as a customer in a shop accessing admin function. Often this just takes the form of changing URL’s to see if it allows access. 
Automated checking systems only check that access controls are in place rather than correct user access correct parts so requires intensive manual testing. The best way to stop this is to deny everything by default then give out only to who need it, implement groups and least privileged access policy. There should also be logs of failures to be reviewed.         </p>
        </Alert>
        {!show && <p className="button" onClick={() => setShow(true)} variant="flat" size="xxl">Number Five</p>}
    </div>
    </>
  );
}

export default SecurityFive;
