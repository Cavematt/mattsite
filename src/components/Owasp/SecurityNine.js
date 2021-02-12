import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './Owasp.css'

function SecurityNine() {
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
        <Alert.Heading className="bimbo">Using components with known vulnerabilities</Alert.Heading>
        <p className="bimbo">
Example Apache web server, oracle DB server. TLS/SSL is used to connect. Lots of different vulnerabilities available for all 3 of those. Often you have to use applications that contain known vunrabilities as they are the best option. It is good its known so the prudent admin can update it and keep it configured correctly by continuous inventory clients/servers. Ensure downloads of components are from trusted sources. Plan for monitoring and knowing what components you have, patching, configuration updates. 
Check for common vunrability exploits and national vunrability database for your components.</p>
        </Alert>
        {!show && <p className="button" onClick={() => setShow(true)} variant="flat" size="xxl">Number Nine</p>}
    </div>
    </>
  );
}

export default SecurityNine;
