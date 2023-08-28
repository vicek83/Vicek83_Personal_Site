import React, {useEffect, useState} from 'react';
import ReactPlayer from "react-player";
import {Link, useLocation, useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
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
import {supabase} from "../../supabaseClient.js";


const Post = ({numberOfNotes}) => {

    const [blogNotes, setBlogNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getBlog();
    }, [])


    async function getBlog() {
        try {
            const {data: Blog, error} = await supabase
                .from('Blog')
                .select('*')
                .order('id', {ascending: false})
                .limit(numberOfNotes)

            if (error) throw error;
            if (Blog !== null) {
                console.log(Blog);
                setBlogNotes(Blog);
                setIsLoading(false);

            }
        } catch (error) {
            alert(error.message);
        }
    }


    const baseUrl = "https://vicek83.netlify.app/blog"

    const {id} = useParams();
    return (
        <>
            <div className="container mx-auto">


                    {blogNotes.map((note => {
                        if (note.id === parseInt(id)) {
                            return (
                                <>
                                {isLoading ? ( <p className="text-2xl">Trwa pobieranie danych...</p>
                                ) : (
                                    <div key={note.id}
                                         className="">
                                        <Helmet>
                                            <title>{note.title}</title>
                                            <meta property="og:title" content={note.title} />
                                            <meta property="og:description" content={note.description} />
                                            <meta property="og:image" content={note.image} />
                                        </Helmet>
                                        <div className="">
                                            <h1 className="font-['courgette'] text-5xl mb-8">{note.title}</h1>
                                            <h3 className="font-black text-sm mb-8">{note.created_at}</h3>
                                            <p className="text-lg leading-8 text-justify mb-8">{note.description}</p>
                                            <p className="text-lg leading-8 text-justify mb-8">{note.description_2}</p>
                                            <p className="text-lg leading-8 text-justify mb-8">{note.description_3}</p>
                                            <div className="flex justify-center items-center mb-8">
                                                <ReactPlayer url={note.video} controls/>
                                            </div>
                                            <div className="flex flex-col">
                                                <FacebookShareButton className="mx-auto" url={`${baseUrl}/${id}`}>Udostępnij na Facebooku</FacebookShareButton>
                                                <Link to="/blog">
                                                    <button
                                                        className="uppercase bg-cyan-600 p-5 text-xl text-white rounded-2xl mt-4 w-60 hover:bg-cyan-500">powrót
                                                    </button>
                                                </Link>
                                            </div>


                                        </div>

                                    </div>)}
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

