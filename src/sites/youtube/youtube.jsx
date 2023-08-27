import React from 'react';
import {Link} from "react-router-dom";


const Youtube = ({playlists}) => {

    return (<>
            <div className="container mx-auto">
                <div
                    className="">
                    <div className="flex gap-14 justify-center mb-8">
                    <Link to="/youtube">
                        <button
                            className="uppercase p-5 text-xl md:text-3xl text-black text-bold underline underline-offset-8 mt-4 w-60 hover:scale-125 transition-transform duration-300">Let's playe
                        </button>
                    </Link>
                    <Link to="/youtube/reviews">
                        <button
                            className="uppercase p-5 text-xl md:text-3xl text-black text-bold mt-4 w-60 hover:scale-125 transition-transform duration-300">Recenzje
                        </button>
                    </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mx-auto lg:grid-cols-3">
                        {playlists.filter((playlist) =>
                            playlist.snippet.title.toLowerCase().includes("zagrajmy")
                            ).map((playlist => (
                            <Link key={playlist.id} to={`/youtube/${playlist.id}`} state={playlists} className="">

                                <button key={playlist.id}
                                        className="p-4 w-full h-full border-black border-2 border-solid rounded mb-1 shadow-lg hover:shadow-2xl">
                                    <div className="relative">
                                        <h1 className="font-['courgette'] text-xl mb-2 h-16 overflow-hidden">
                                            {playlist.snippet.title}
                                        </h1>
                                        <img src={playlist.snippet.thumbnails.high.url}
                                             className="mx-auto hover:brightness-75 transition-opacity"
                                             alt="Playlist Image"/>

                                        <div className="absolute "></div>
                                    </div>
                                </button>
                            </Link>


                        )))}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Youtube

