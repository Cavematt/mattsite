import React, { useState, useEffect, useRef } from 'react'
import "./FrontPage.css"
import Me from "../images/me.jpg"
import GitHub from "../images/GitHub.png"
import LinkedIn from "../images/linked.png"
import { TweenMax, Power3 } from "gsap"

function FrontPage() {

    // below is for the variable display
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

    //below is for the mobile or desktop to render correct words
    const [text, setText] = useState(true)

    const showText = () => {
        if (window.innerWidth <= 999) {
            setText(true)
        } else {
            setText(false)
        }
    }

    useEffect(() => {
        showText()
    }, [])
    
    window.addEventListener('resize', showText)

    //below is for gsap animations
    let fpText = useRef(null);
    let fpPhoto = useRef(null);

    useEffect(() => {
        TweenMax.from(
            fpText,
            1,
            {
                opacity: 0,
                y: -200,
                ease: Power3.easeOut,
            delay: 0.7,
        }
    )
    TweenMax.from(
        fpPhoto,
        2,
        {
            opacity: 0,
            y: 200,
            ease: Power3.easeOut,
        delay: 2,
    }
)
    },[])

    return (
        <div className="fpAll">
            <div>
                <div ref={el => {fpText = el}} className="fpText">
                    {text ? <div><p>Hello, My name is Matthew and I am a developer from Central Scotland. Here on my site you will find out a bit about me and how I can help your business by developing value custom solutions to help you run your business more efficiently. </p></div> : <div><p>Hello, thanks for taking the time to check out my site. Here you will find out a bit about me and how I can help your business by developing value custom solutions to help you run your business more efficiently. </p></div>}
                    <p>I specialise in React.js with a love for design and layout. I love to learn and am happy to learn new languages and skills if needed for a project. Please check out the rest of my site for further information</p>
                    <p className="fpTextSig">Matthew Potts</p>
                    <div>
                        <a href="https://github.com/Cavematt">
                        <img className="fpGitHub"src={GitHub} alt="Link to matt Potts Github" />
                        </a>
                        <a href="https://uk.linkedin.com/public-profile/in/matthew-potts-15b908196?">
                        <img className="fplinkedIn"src={LinkedIn} alt="Link to matt Potts Linkedin" />
                        </a>
                    </div>
                </div>
                <div ref={el =>{fpPhoto = el}} className="fpPhotoCont">
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
