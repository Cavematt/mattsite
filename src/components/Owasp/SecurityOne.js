import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './Owasp.css'

function SecurityOne() {
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
        <Alert.Heading className="bimbo">Injection Attacks</Alert.Heading>
        <p className="bimbo">
Injection attacks there are lots of different types, but are often very similar. The common way of doing this is by putting a malicious code/query into an input field, such as a username and password box. This can fool the database into returning lots of responses, such as all the usernames or customer details.
To stop this, proper defence mechanisms should be in place such as maximum amount of data returned to limit data loss. There should also be prameters put in place such as a username format e.g 10 character username instead of an SQL query. Web application firewalls can also be put in place to stop injection attacks.         </p>
        </Alert>
        {!show && <p className="button" onClick={() => setShow(true)} variant="flat" size="xxl">Number One</p>}
    </div>
    </>
  );
}

export default SecurityOne;
