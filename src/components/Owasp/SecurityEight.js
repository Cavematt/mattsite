import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './Owasp.css'

function SecurityEight() {
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
        <Alert.Heading className="bimbo">Insecure deserialisation</Alert.Heading>
        <p className="bimbo">
it is turning an object into a byte stream/string of bytes (serialization) so that it can be in a format to get around a http network or stored in a database. Reason to use is to persist its state. After its travel goes back to an object (deserialization). Concept of deserialisation is often used in web apps and if an untrusted user input from a malicious actor it can inject an object. Usually changing a cookie so for example way of doing will be changing Alice:user:1234:xyz to Eve:Admin:1234:xyz which would allow access. 
Best thing to do is validate user input. Quite a niche area and requires quite a lot of human interaction.         </p>
        </Alert>
        {!show && <p className="button" onClick={() => setShow(true)} variant="flat" size="xxl">Number Eight</p>}
    </div>
    </>
  );
}

export default SecurityEight;
