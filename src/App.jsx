import {useState} from 'react'
import logo from './assets/logo.png'
import facebook from './assets/icon-facebook.svg'
import discord from './assets/icon-discord.svg'
import instagram from './assets/icon-instagram.svg'
import youtube from './assets/icon-youtube.svg'
import twitch from './assets/icon-twitch.svg'
import './App.css'
import Header from './header.jsx'

const openLinkInNewWindow = (url) => {
    return (
        window.open(url, "_blank")
    )
};

    function App() {



    return (
        <>
            <Header logo={logo} facebook={facebook} discord={discord} instagram={instagram} youtube={youtube} twitch={twitch} openLinkInNewWindow={openLinkInNewWindow}/>
        </>
    )
}

export default App
