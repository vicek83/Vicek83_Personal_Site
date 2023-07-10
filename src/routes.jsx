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


const Routing = () => {
    return (

        <BrowserRouter>
            <Routes>
                    <Route path='/' element={<AboutMe />} />
                    <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Routing

