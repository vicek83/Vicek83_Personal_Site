import React from 'react';
import {Link, useLocation, useParams} from "react-router-dom";



const Review = () => {

    const location = useLocation();
    const playlist = location.state;

    const descriptionSplitting = (description) => {
        return description.split('*').map((paragraph, index) => (
            <p className="mb-8" key={index}>{paragraph}</p>
        ));
    };

    const {id} = useParams();
    console.log(playlist);
    console.log(id);
    console.log(location.state);
    return (
        <>
            <div className="container mx-auto">


                {playlist.map((review => {
                    if (review.id === (id)) {
                        return (
                            <>
                                <div key={review.id}
                                     className="">
                                    <div className="">
                                        <h1 className="font-['courgette'] text-5xl mb-8">{review.snippet.title}</h1>
                                        <p className="text-lg leading-8 text-justify mb-8">{descriptionSplitting(review.snippet.description)}</p>
                                        <div className="">
                                            <iframe className="w-1/2 h-96 mx-auto"
                                                    src={`https://www.youtube.com/embed/${review.snippet.resourceId.videoId}`}
                                                    title="YouTube video"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                            />
                                        </div>
                                        <Link to="/youtube/reviews">
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

export default Review
