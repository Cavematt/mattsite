import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutMe.css"

function AboutMe() {
    return (
        <div className="aboutAll">
            <h1>About Me</h1>
            <p>Hi. I am Matt Potts, I am 30 and I live in Stirling, Scotland with my wife and baby daughter. I have previous experience in Logistics, Financial services and the Security sector. Stirling is within easy reach of Falkirk, Glasgow, Edinburgh, Cumbernauld and Perth.</p>
            <p>I started developing because I saw problems at the places I was working at and I thought that I could come up with solutions to them in a better and more efficient way. So I learnt HTML/CSS followed by Javascript and then ReactJs. I built lots of different things, some good, some bad, but I am always ready and happy to learn. </p>
            <p>So I built a website, online induction portal and got a mobile app working. This enabled them to ensure employees had up to date safe systems of work and information relating to their role to try and minimize accidents and ensure that employers responsibilities are covered. This product has award nominated. During this process I became a AWS certified cloud practitioner.</p>
            <h3>My Hobbies and interests</h3>
            <p>I enjoy reading about technology online and reserching this. I help lead a youth group at my local church. I also like to travel to somewhat unusual holiday destinations, I have been to North Korea, some really dodgy parts of Ukraine and my idea of a nice family holiday is going to an x-soviet resort in Georgia where noone speaks English!</p>
            <p>I have a full clean driving licence and am happy to travel in the UK and internationally if required. I hold a UK passport as well as an EU residence permit and (hopefully) soon Hungarian citizenship allowing work in the EU if required. </p>
            <h3>For the future</h3>
            <p>I enjoy constantly learning and always need to have something on the go to learn about. I want to learn C# or PHP and get better at react native in the immediate future, but I am flexible. I enjoy constantly learning and always need to have something on the go to learn about. I want to learn C# or PHP and get better at React Native in the immediate future.</p>
            <p>Whether you are looking for a website made, or want to chat about opportunities in your organisation please feel free to reach out to me</p>
            <Link to="/Contact">Click here</Link>
        </div>
    )
}

export default AboutMe