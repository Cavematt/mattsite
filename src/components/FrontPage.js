import React, { useState, useEffect } from 'react'
import "./FrontPage.css"
import Me from "../images/me.jpg"
import GitHub from "../images/GitHub.png"
import LinkedIn from "../images/linked.png"

function FrontPage() {
    const [line, setLine] = useState("")

    useEffect(() => {
        setInterval(() => {
            setLine(<div>Front-End development</div>)
        }, 6000) 
        setTimeout(() => {
            setInterval(() => {
                setLine(<div>Cloud Services</div>)
            }, 6000) 
        }, 2000)
        setTimeout(() => {
            setInterval(() => {
                setLine(<div>Custom Designs</div>)
            }, 6000) 
        }, 4000)
    }, [])

    return (
        <div className="fpAll">
            <div>
                <div className="fpText">
                    <p>Hello, thanks for taking the time to check out my site. Here you will find out a bit about me and how I can help your business by developing value custom solutions to help you run your business more efficiently. </p>
                    <p>I specialise in React.js with a love for design and layout. I love to learn and am happy to learn new languages and skills if needed for a project. Please check out the rest of my site for further information</p>
                    <p className="fpTextSig">Matthew Potts</p>
                    <div>
                        <a href="https://github.com/Cavematt">
                        <img src={GitHub} alt="Link to matt Potts Github" />
                        </a>
                        <a href="https://uk.linkedin.com/public-profile/in/matthew-potts-15b908196?">
                        <img className="linkedIn"src={LinkedIn} alt="Link to matt Potts Linkedin" />
                        </a>
                    </div>
                </div>
                <div className="fpPhotoCont">
                    <img className="fpPhoto" src={Me} alt="display of me" />
                </div>
            </div>
            <div>
                <div className="fpDynamic">
                    <p className="fpDynamicText">{line}</p>
                </div>
            </div>
        </div>
    )
}

export default FrontPage
