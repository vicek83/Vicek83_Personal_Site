import React from 'react';
import AboutMe from "./aboutme.jsx";
import FetchBlog from "./fetchBlog.jsx";


const Main = () => {

    return (
        <>
            <AboutMe/>
            <h2 className="overflow-hidden font-['courgette'] text-center text-7xl mb-12">Zajrzyj na bloga!</h2>
            <FetchBlog numberOfNotes={3}/>
        </>
    )
}

export default Main