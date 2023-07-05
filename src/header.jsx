const Header = ({logo, youtube, discord, instagram, facebook, twitch, openLinkInNewWindow}) =>
{

    return (
        <>


            <div className="container mx-auto">
                <header className="mt-2 shadow-lg py-4 px-8 bg-gradient-to-b from from-gray-100 to-gray-200 rounded ring ring-gray-300 ring-offset-2">
                    <div className="flex items-center justify-between">
                        <img src={logo} alt="logo"/>
                        <p className="uppercase text-4xl font-bold text-black"> vicek83 - świat przygodówek</p>
                        <div className="flex gap-2">
                            <a href="#!" onClick={() => openLinkInNewWindow("https://www.youtube.com/@vicek83")}>
                                <img src={youtube} className="w-8 transform hover:scale-125 transition duration-500 hover:opacity-60"
                                     alt="icon-youtube"/>
                            </a>
                            <a href="https://discord.gg/UTFvTSu" target="_blank">
                                <img src={discord} className="w-8 transform hover:scale-125 transition duration-500 hover:opacity-60"
                                     alt="icon-discord"/>
                            </a>
                            <a href="https://www.instagram.com/vicek83/" target="_blank">
                                <img src={instagram} className="w-8 transform hover:scale-125 transition duration-500 hover:opacity-60"
                                     alt="icon-instagram"/>
                            </a>
                            <a href="https://www.facebook.com/Vicek83/" target="_blank">
                                <img src={facebook} className="w-8 transform hover:scale-125 transition duration-500 hover:opacity-60"
                                     alt="icon-facebook"/>
                            </a>
                            <a href="https://www.twitch.tv/vicek83" target="_blank">
                                <img src={twitch} className="w-8 transform hover:scale-125 transition duration-500 hover:opacity-60"
                                     alt="icon-twitch"/>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="uppercase bg-cyan-600 p-5 text-xl text-white rounded-2xl mt-4 w-60 hover:bg-cyan-500">strona główna</button>
                        <button className="uppercase bg-cyan-600 p-5 text-xl text-white rounded-2xl mt-4 w-60 hover:bg-cyan-500">blog</button>
                        <button className="uppercase bg-cyan-600 p-5 text-xl text-white rounded-2xl mt-4 w-60 hover:bg-cyan-500">youtube</button>
                        <button className="uppercase bg-cyan-600 p-5 text-xl text-white rounded-2xl mt-4 w-60 hover:bg-cyan-500">kontakt</button>
                    </div>


                </header>

            </div>

        </>
    )
}

export default Header