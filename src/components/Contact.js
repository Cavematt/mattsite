import React from 'react'
import "./Contact.css"
import GitHub from "../images/GitHub.png"
import LinkedIn from "../images/linked.png"

function Contact() {
    return (
        <div className="contactAll">
            <div>
            <h1>Thank you</h1>
            <p>Thanks for taking the time to look at my website, I genuinely appreciate it. If you have any comments, want a chat about what I can do for you or your organisation, or indeed if you have an interesting oppertunities arising in your organisation then please reach out!</p>
            </div>
            
            <h3>ContactDetails.json</h3>
            <div className="jsonContainer">
            <pre>{` 
            {
                "ContactInfo": {
                    "Name" : "Matthew Potts",
                    "Contact Number" : "07505015289",
                    "Location" : "Stirling Scotland"
                    },
                "dev":{
                "github" : "Cavematt"
                },
                "email": {
                    "personal" : "Matthew.Potts03@gmail.com"                   
                }
            }
         `}</pre>
            </div>
            <div>
                        <a href="https://github.com/Cavematt">
                        <img className="fpGitHub"src={GitHub} alt="Link to matt Potts Github" />
                        </a>
                        <a href="https://uk.linkedin.com/public-profile/in/matthew-potts-15b908196?">
                        <img className="fplinkedIn"src={LinkedIn} alt="Link to matt Potts Linkedin" />
                        </a>
                    </div>
        </div>
    )
}

export default Contact
