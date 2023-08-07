import React from 'react';
import ReactPlayer from "react-player";
import {Link, useLocation, useParams} from "react-router-dom";
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    TwitterIcon,
} from "react-share";



const Post = () => {

    const location = useLocation();
    const blogNotes = location.state;
    const baseUrl = "https://vicek83.netlify.app/blog"

    const {id} = useParams();
    return (
        <>
            <div className="container mx-auto">


                    {blogNotes.map((note => {
                        if (note.id === parseInt(id)) {
                            return (
                                <>
                                    <div key={note.id}
                                         className="">
                                        <div className="">
                                            <h1 className="font-['courgette'] text-5xl mb-8">{note.title}</h1>
                                            <h3 className="font-black text-sm mb-8">{note.created_at}</h3>
                                            <p className="text-lg leading-8 text-justify mb-8">{note.description}</p>
                                            <p className="text-lg leading-8 text-justify mb-8">{note.description_2}</p>
                                            <p className="text-lg leading-8 text-justify mb-8">{note.description_3}</p>
                                            <div className="flex justify-center items-center mb-8">
                                                <ReactPlayer url={note.video} controls/>
                                            </div>
                                            <FacebookShareButton url={`${baseUrl}/${id}`}>Udostępnij na Facebooku</FacebookShareButton>
                                            <Link to="/blog">
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

export default Post

