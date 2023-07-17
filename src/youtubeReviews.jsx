import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


const YoutubeReviews = ({playlist}) => {

    return (<>
            <div className="container mx-auto">
                <div
                    className="">
                    <div className="flex gap-14 justify-center mb-8">
                    <Link to="/youtube">
                    <button
                        className="uppercase p-5 text-3xl text-black text-bold mt-4 w-60 hover:text-cyan-500 hover:scale-125 transition-transform duration-300 ">Let's playe
                    </button>
                </Link>
                    <Link to="/youtube/reviews">
                        <button
                            className="uppercase p-5 text-3xl text-black text-bold underline underline-offset-8 mt-4 w-60 hover:text-cyan-500 hover:scale-125 transition-transform duration-300">Recenzje
                        </button>
                    </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                        {playlist.map((review => (
                            <Link key={review.id} to={`/youtube/reviews/${review.id}`} state={playlist} className="">

                                <button key={review.id}
                                        className="p-4 w-full h-full border-black border-2 border-solid rounded mb-1 shadow-lg hover:shadow-2xl">
                                    <div className="relative">
                                        <h1 className="font-['courgette'] text-xl mb-2 h-16 overflow-hidden">
                                            {review.snippet.title}
                                        </h1>
                                        <img src={review.snippet.thumbnails.high.url}
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

export default YoutubeReviews
