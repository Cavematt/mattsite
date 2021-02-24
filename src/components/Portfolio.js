import React from 'react'
import "./Portfolio.css"
import ivett from "../images/ivett.jpg"
import ivettMobile from "../images/ivettmobile.jpg"
import burnett from "../images/arb1.jpg"
import burnettApp from "../images/exposhot.jpg"
import store from "../images/store.jpg"
import store1 from "../images/store1.jpg"

function Portfolio() {
    return (
        <div className="portAll">
            <div>
                <div>
                    <h1>Portfolio</h1>
                </div>
                <div>
                    <p>Below is a small selection of my work to demonstrate my abilities as well as some of my customers sites.</p>
                </div>
                <div>
                    <p>This is a website for a hairdresser informing customers about her work as well as other information such as experience and contact details. It is fully animated and compatible with desktop, tablet and mobile devices.</p>
                </div>
                <div>
                    <img src={ivett} alt="ivett site" className="ivettDesktop" />
                    <img src={ivettMobile} alt="ivett mobile site" className="ivettMobile" />
                </div>
                <div className="portBetweenText">
                    <p>This is for a local haulage company. They wanted a low maintenance simple website with basic information about their company. It is compatible with desktop and mobile. I also made an accompanying mobile application for their drivers to access health and safety information as well as other info such as newsletters. I am also building an e-induction platform for their drivers to receive training.</p>
                </div>
                <div>
                    <img src={burnett} alt="burnett" className="burnettDesktop" />
                    <img src={burnettApp} alt="burnett custom app" className="burnettMobile" />
                </div>
                <div className="portBetweenText">
                    <p>This is an example online shop built using React and users can create accounts and purchase products fully online. It is customisable to your business if required or I can build a custom platform.</p>
                </div>
                <div>
                    <img src={store} alt="custom store" className="storeMain" />
                    <img src={store1} alt="custom store checkout" className="storeCheckout" />
                </div>
                <div className="endPort">
                    <p>All my code is available on GitHub. Please do not hesitate to get in contact with me for a chat about what I can do for you</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
