import React from 'react';
import facebook from '../../assets/icon-facebook.svg'
import discord from '../../assets/icon-discord.svg'
import instagram from '../../assets/icon-instagram.svg'
import youtube from '../../assets/icon-youtube.svg'
import twitch from '../../assets/icon-twitch.svg'

const Footer = () => {

    return (
        <>


            <div className="container mx-auto">
                <header
                    className="mt-4 mb-2 shadow-lg py-4 px-8 bg-gradient-to-b from from-sky-200 to-sky-400 rounded ring ring-sky-500 ring-offset-2">

                    <p className="text-xl font-bold mb-8">Copyright ©2023 Vicek83</p>

                    <div className="flex items-center justify-center gap-2">
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


                </header>

            </div>

        </>
    )
}

export default Footer