import React from 'react';
import AboutMe from "./aboutme.jsx";
import FetchBlog from "../blog/fetchBlog.jsx";
import FetchYoutubeVideos from "../youtube/fetchYoutubeVideos.jsx";
import Support from "./support.jsx";


const Main = () => {

    return (
        <>
            <AboutMe/>
            <h2 className="overflow-hidden font-['courgette'] text-center text-6xl mb-12">Zajrzyj na bloga!</h2>
            <FetchBlog numberOfNotes={3}/>
            <hr className="mt-24 mb-16 h-1 mx-auto my-4 bg-gray-600 rounded" />
            <Support />
            <FetchYoutubeVideos />
        </>
    )
}

export default Main