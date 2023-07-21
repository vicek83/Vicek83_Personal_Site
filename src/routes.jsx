import React from 'react';
import {createRoot} from 'react-dom/client';
import {
    BrowserRouter,
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import Contact from "./sites/contact/contact.jsx";
import Post from "./sites/blog/post.jsx";
import FetchBlog from "./sites/blog/fetchBlog.jsx";
import Header from "./sites/Header/header.jsx";
import Main from "./sites/main/main.jsx";
import Footer from "./sites/Footer/footer.jsx";
import FetchYoutube from "./sites/youtube/fetchYoutube.jsx";
import Playlists from "./sites/youtube/playlists.jsx";
import FetchYoutubeReviews from "./sites/youtube/fetchYoutubeReviews.jsx";
import Review from "./sites/youtube/review.jsx";


const Routing = () => {
    return (

        <BrowserRouter>
            <Header/>
            <div
                className="container mx-auto mt-4 pt-16 shadow-lg py-4 px-8 bg-gradient-to-b from from-sky-50 to-sky-100 rounded ring ring-sky-500 ring-offset-2">
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/blog' element={<FetchBlog/>}/>
                    <Route
                        path="blog/:id"
                        element={<Post/>}
                    />
                    <Route path='/youtube' element={<FetchYoutube/>}/>
                    <Route
                        path="youtube/:id"
                        element={<Playlists/>}

                    />
                    <Route path='/youtube/reviews' element={<FetchYoutubeReviews/>}/>
                    <Route
                        path="youtube/reviews/:id"
                        element={<Review/>}

                    />
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>

    )
}

export default Routing

