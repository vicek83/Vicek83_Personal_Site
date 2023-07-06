import {useState} from 'react'
import logo from './assets/logo.png'
import facebook from './assets/icon-facebook.svg'
import discord from './assets/icon-discord.svg'
import instagram from './assets/icon-instagram.svg'
import youtube from './assets/icon-youtube.svg'
import twitch from './assets/icon-twitch.svg'
import './App.css'
import Header from './header.jsx'
import AboutMe from "./aboutme.jsx";
import Contact from "./contact.jsx";

const openLinkInNewWindow = (url) => {
    return (
        window.open(url, "_blank")
    )
};

function App() {


    return (
        <>
            <Header logo={logo} facebook={facebook} discord={discord} instagram={instagram} youtube={youtube}
                    twitch={twitch} openLinkInNewWindow={openLinkInNewWindow}/>
            <div
                className="mt-4 pt-16 shadow-lg py-4 px-8 bg-gradient-to-b from from-gray-200 to-gray-100 rounded ring ring-gray-300 ring-offset-2">
                <AboutMe/>
            </div>
        </>

    )
}

export default App
