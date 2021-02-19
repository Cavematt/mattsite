import React from 'react'
import "./AboutMe.css"
import wheelPhoto from "../images/georgiaWheel.jpg"
import vardzia from "../images/vardzia.jpg"

function AboutMe() {
    return (
        <div className="aboutAll">
            <div>
                <img className="aboutGeorgia" src={wheelPhoto} alt="matt potts" />
            </div>
            <div classname="photoText" >
                <h1>About Me</h1>
                <p>I started developing because I saw problems at the places I was working at and I thought that I could come up with solutions to them in a better and more efficient way. So I learnt HTML/CSS followed by Javascript and then ReactJs. I built lots of different things, some good, some bad, but I am always ready and happy to learn. </p>
                <p>So I built a website, online induction portal and got a mobile app working. This enabled them to ensure employees had up to date safe systems of work and information relating to their role to try and minimize accidents and ensure that employers responsibilities are covered. This product has award nominated. During this process I became a AWS certified cloud practitioner.</p>
            </div>
            <div>
                <div>
                    <img className="vardziaPhoto" src={vardzia} alt="travelling" />
                </div>
                <h3>My Hobbies and interests</h3>
                <p>I enjoy reading about technology online and reserching this. I help lead a youth group at my local church. I also like to travel to somewhat unusual holiday destinations, I have been to North Korea, some really dodgy parts of Ukraine and my idea of a nice family holiday is going to an x-soviet resort in Georgia where noone speaks English!</p>
                <p>I have a full clean driving licence and am happy to travel in the UK and internationally if required. I hold a UK passport as well as the right to reside in the EU allowing me to work in the EU if required. I can speak and read a bit of Hungarian. I can also read a bit of Russian.</p>
            </div>
            <h3>For the future</h3>
            <p>I enjoy constantly learning and always need to have something on the go to learn about. I want to learn C# or PHP and get better at react native in the immediate future, but I am flexible. I enjoy constantly learning and always need to have something on the go to learn about. I want to learn C# or PHP and get better at React Native in the immediate future.</p>
            <p>Whether you are looking for a website made, or want to chat about opportunities in your organisation please feel free to reach out to me</p>
        </div>
    )
}

export default AboutMe