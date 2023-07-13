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
import AboutMe from "./aboutme.jsx";
import Blog from "./blog.jsx";
import Contact from "./contact.jsx";
import Post from "./post.jsx";
import FetchBlog from "./fetchBlog.jsx";
import Header from "./header.jsx";
import Main from "./main.jsx";
import Footer from "./footer.jsx";


const Routing = () => {
    return (

        <BrowserRouter>
            <Header />
            <div
                className="container mx-auto mt-4 pt-16 shadow-lg py-4 px-8 bg-gradient-to-b from from-gray-200 to-gray-100 rounded ring ring-gray-300 ring-offset-2">
            <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/blog' element={<FetchBlog />} />
                <Route
                    path="blog/:id"
                    element={<Post />}
                />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            </div>
            <Footer />
        </BrowserRouter>

    )
}

export default Routing

