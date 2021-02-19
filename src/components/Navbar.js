import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

//Set css properties for every other page of marginleft of 80% and 60% on hover


function Navbar() {
    //the below deals with rendering the appropriate menu
    const [menu, setMenu] = useState(true)

    const changeMenu= () => {
        if (menu === true) {
        setMenu(false)
    } else {
        setMenu(true)
    }
    }

    //the below deals with checking the screen width for the menu as appropriate 

    const [button, setButton] = useState(false)
    
    const showButton = () => {
        if (window.innerWidth <= 999) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])
    
    window.addEventListener('resize', showButton)

    

    //the below deals with color of pages for dark mode
    const [color, setColor] = useState("#000080")
    const [fontclr, setFontclr] = useState("yellow")
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
            document.body.style.color = fontclr
        }
    }, [color, nice, fontclr])




  

    return (
        <div>
            {button ? <div  className="navbarAll">
            <div className="navbarTitle">
                <h1>C:\Matt-Potts\Developer\Central-Scotland>.</h1>
            </div>
            <div className="navbarList">
                <ul>
                    <li className="navbarButton">
                        <Link onClick={() => {setColor("#000080"); setFontclr("yellow")}} className="navbarLinks"  to="/">Home</Link>
                    </li>
                    <li className="navbarButton">
                        <Link onClick={() => {setColor("#D3D3D3"); setFontclr("#666666")}} className="navbarLinks" to="/AboutMe">About Me</Link>
                    </li>
                    <li className="navbarButton">
                        <Link className="navbarLinks" to="/Business">Web Design</Link>
                    </li>
                    <li className="navbarButton">
                        <Link className="navbarLinks" to="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="navbarButton">
                        <Link onClick={() => setColor("#149414")} className="navbarLinks" to="/Security">Security</Link>
                    </li>
                    <li className="navbarButton">
                        <Link className="navbarLinks" to="/Contact">Contact.json</Link>
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
            : 
            null}
            {menu ? <div><p  onClick={changeMenu} className="navButton">MENU</p></div> : 
            <div  className="navbarAll">
            <div className="navbarTitle">
                <h1>C:\Matt-Potts\Developer\Central-Scotland>.</h1>
            </div>
            <div className="navbarList">
                <ul>
                    <li className="navbarButton">
                        <Link onClick={() => {setColor("#000080"); setFontclr("yellow"); changeMenu()}} className="navbarLinks"  to="/">Home</Link>
                    </li>
                    <li className="navbarButton">
                        <Link onClick={() => {setColor("#D3D3D3"); setFontclr("#666666"); changeMenu()}} className="navbarLinks" to="/AboutMe">About Me</Link>
                    </li>
                    <li className="navbarButton">
                        <Link className="navbarLinks" to="/Business">Web Design</Link>
                    </li>
                    <li className="navbarButton">
                        <Link className="navbarLinks" to="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="navbarButton">
                        <Link className="navbarLinks" to="/Security">Security</Link>
                    </li>
                    <li className="navbarButton">
                        <Link className="navbarLinks" to="/Contact">Contact.json</Link>
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
            </div>}
            </div>
    )
}

export default Navbar
