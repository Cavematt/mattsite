import React from 'react'
import { Link } from 'react-router-dom'
import './Security.css'

function Security() {

  
    return (
        <div className="everything">
            <div className="everythingElse">
            <h1 className="title">Security</h1>
            <div className="mainText">
                <p>As a developer it is my job to ensure that the code is secure by design and is tested to minimize bugs and errors. 
                    I ensure that my apps are secured by SSL (as you can see by the padlock symbol in most browsers). That there is no way to access other user info by testing API's to ensure security, only using CDN's from trusted vendors and relying on companies such as AWS for authentication of users.
                </p>
                <p>I have an eye for spotting vunrabilities.  This year I have come accross unsecure credit card numbers from a hotel website in spain in plain text!, and also a list of transatctions and reference numbers in a major UK insurance comapny after purchasing insurance from them myself. Of course the first thing I did was inform them in both cases. The hotel swiftly resolved the issue, wheras the insurance company ignored me! c'est la vie! </p>
                <p>
                    Owasp is the Open Web Application Security Project and they produce a top 10 of the most commonly used exploits, click on the below links to view the top 10 and a short explanation of each of them and then please take the Quiz to check your knowledge! 
                </p>
            </div>
            <div className="buttonOne">
            <Link className="buttonOneLink" to="/Owasp">Owasp information</Link>
            </div>
            <div className="buttonTwo">
            <Link className="buttonTwoLink" to="/OwaspQuiz">Quiz on OWASP</Link>
            </div>
            </div>
        </div>
    )
}

export default Security