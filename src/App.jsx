import React from 'react';
import './App.css'
import './index.css'
import Header from './header.jsx'
import Routing from './routes.jsx';
import FetchBlog from "./fetchBlog.jsx";
import ReactDOM from "react-dom";


function App() {


    return (
        <>
                   <Routing />
        </>

    )
}

export default App

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
