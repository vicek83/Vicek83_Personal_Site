import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


const Youtube = ({playlists}) => {

    return (<>
            <div className="container mx-auto">
                <div
                    className="">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
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

