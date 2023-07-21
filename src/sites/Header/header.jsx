import React from 'react';
import logo from '../../assets/logo.png'
import facebook from '../../assets/icon-facebook.svg'
import discord from '../../assets/icon-discord.svg'
import instagram from '../../assets/icon-instagram.svg'
import youtube from '../../assets/icon-youtube.svg'
import twitch from '../../assets/icon-twitch.svg'
import {NavLink} from "react-router-dom";

const Header = () => {

    const activeLink = "bg-cyan-600 p-5 text-xl text-white rounded-2xl mt-4 w-60 ring ring-offset-2 ring-cyan-600 hover:bg-cyan-500";
    const normalLink = "bg-cyan-600 p-5 text-xl text-white rounded-2xl mt-4 w-60 hover:bg-cyan-500";
    return (
        <>


            <div className="container mx-auto">
                <header
                    className="mt-2 shadow-lg py-4 px-8 bg-gradient-to-b from from-sky-200 to-white rounded ring ring-sky-500 ring-offset-2">
                    <div className="flex items-center justify-between">
                        <img src={logo} alt="logo"/>
                        <p className="uppercase text-4xl font-bold text-black"> vicek83 - świat przygodówek</p>
                        <div className="flex gap-2">
                            <a href="https://www.youtube.com/@vicek83" target="_blank">
                                <img src={youtube}
                                     className="w-8 transform hover:scale-125 transition duration-500 hover:opacity-60"
                                     alt="icon-youtube"/>
                            </a>
                            <a href="https://discord.gg/UTFvTSu" target="_blank">
                                <img src={discord}
                                     className="w-8 transform hover:scale-125 transition duration-500 hover:opacity-60"
                                     alt="icon-discord"/>
                            </a>
                            <a href="https://www.instagram.com/vicek83/" target="_blank">
                                <img src={instagram}
                                     className="w-8 transform hover:scale-125 transition duration-500 hover:opacity-60"
                                     alt="icon-instagram"/>
                            </a>
                            <a href="https://www.facebook.com/Vicek83/" target="_blank">
                                <img src={facebook}
                                     className="w-8 transform hover:scale-125 transition duration-500 hover:opacity-60"
                                     alt="icon-facebook"/>
                            </a>
                            <a href="https://www.twitch.tv/vicek83" target="_blank">
                                <img src={twitch}
                                     className="w-8 transform hover:scale-125 transition duration-500 hover:opacity-60"
                                     alt="icon-twitch"/>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        <NavLink end
                                 to="/"
                                 className={({isActive}) =>
                                     isActive ?
                                         activeLink : normalLink
                                 }>
                            <button
                                className="uppercase">strona główna
                            </button>
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className={({isActive}) =>
                                isActive ?
                                    activeLink : normalLink
                            }>
                            <button
                                className="uppercase">blog
                            </button>
                        </NavLink>
                        <NavLink
                            to="/youtube"
                            className={({isActive}) =>
                                isActive ?
                                    activeLink : normalLink
                            }>
                            <button
                                className="uppercase">youtube
                            </button>
                        </NavLink>
                        <NavLink end
                                 to="/contact"
                                 className={({isActive}) =>
                                     isActive ?
                                         activeLink : normalLink
                                 }>
                            <button
                                className="uppercase">kontakt
                            </button>
                        </NavLink>
                    </div>


                </header>

            </div>

        </>
    )
}

export default Header