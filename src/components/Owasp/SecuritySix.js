import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './Owasp.css'

function SecuritySix() {
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
        <Alert.Heading className="bimbo">Security Misconfiguration</Alert.Heading>
        <p className="bimbo">
Web apps comprise lots of different elements. Web Server, database. Apache web servers are most common and there are loads of vulnerabilities but it depends on version and should always patch and update to the maximum extent possible. The more features there are the higher risk it is. Just remember “the higher the functionality, the higher the risk”. Customization should be done to as much as possible, changing of default passwords, closing of ports, custom 404’s. Automated testing tools are a good thing to use to stop these attacks. When developing us the same servers as in production so when automated tests done, they are accurate. Security headers are useful         </p>
        </Alert>
        {!show && <p className="button" onClick={() => setShow(true)} variant="flat" size="xxl">Number Six</p>}
    </div>
    </>
  );
}

export default SecuritySix;
