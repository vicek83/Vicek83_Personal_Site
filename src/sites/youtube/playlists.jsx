import React from 'react';
import {Link, useLocation, useParams} from "react-router-dom";


const Playlists = () => {

    const location = useLocation();
    const playlists = location.state;

    const descriptionSplitting = (description) => {
        return description.split('*').map((paragraph, index) => (

            <p className="mb-8 text-lg leading-8 text-justify" key={index}>{paragraph}</p>
        ));
    };


    const {id} = useParams();

    return (
        <>
            <div className="container mx-auto">


                {playlists.map((playlist => {
                    if (playlist.id === (id)) {
                        return (
                            <>
                                <div key={playlist.id}
                                     className="">
                                    <div className="">
                                        <h1 className="font-['courgette'] text-5xl mb-8">{playlist.snippet.title}</h1>
                                        {descriptionSplitting(playlist.snippet.description)}
                                        <div className="">
                                            <iframe className="w-full max-w-screen-sm h-96 mx-auto"
                                                src={`https://www.youtube.com/embed?listType=playlist&list=${playlist.id}`}
                                                title="YouTube Playlist"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                        <Link to="/youtube">
                                            <button
                                                className="uppercase bg-cyan-600 p-5 text-xl text-white rounded-2xl mt-4 w-60 hover:bg-cyan-500">powrót
                                            </button>
                                        </Link>

                                    </div>

                                </div>
                            </>
                        );
                    }
                    return null;

                }))}


            </div>



        </>
    );
}

export default Playlists
