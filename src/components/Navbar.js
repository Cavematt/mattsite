import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

//Set css properties for every other page of marginleft of 80% and 60% on hover


function Navbar() {
    const [color, setColor] = useState("#39FF14")
    const [nice, setNice] = useState(false)

    function darkMode() {
        if (nice === false) {
            setNice(true)
        } else {
            setNice(false)
        }
    }

    useEffect(() => {
        if (nice === true) {
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
        } else {
            document.body.style.backgroundColor = color
        }

    }, [color, nice])

  

    return (
        <div  className="navbarAll">
            <div className="navbarTitle">
                <h1>C:\Matt-Potts\Web-Developer\Central-Scotland>.</h1>
            </div>
            <div className="navbarList">
                <ul>
                    <li className="navbarButton">
                        <Link onClick={() => setColor("#39FF14")} className="navbarLinks" to="/">Home</Link>
                    </li>
                    <li className="navbarButton">
                        <Link onClick={() => setColor("pink")} className="navbarLinks" to="/AboutMe">About Me</Link>
                    </li>
                    <li className="navbarButton">
                        <Link className="navbarLinks" to="/Business">Business</Link>
                    </li>
                    <li className="navbarButton">
                        <Link className="navbarLinks" to="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="navbarButton">
                        <Link className="navbarLinks" to="/Security">Security</Link>
                    </li>
                    <li className="navbarButton">
                        <Link className="navbarLinks" to="/Contact">Contact</Link>
                    </li>
                    <li className="navbarButton">
                        <h1 onClick={darkMode}>{nice ? <button className="modeChangeDark">NORMAL MODE</button> : <button className="modeChangeLight">DARK MODE</button>}</h1>
                    </li>
                </ul>
            </div>
            <div className="navbarInfo">
                <p>Contact: 07505015289</p>
            </div>
            <div className="navbarInfo">
                <p>Specialising in React, Javascript and AWS</p>
            </div>
        </div>
    )
}

export default Navbar
