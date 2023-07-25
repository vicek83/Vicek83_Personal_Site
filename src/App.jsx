import React from 'react';
import './css/App.css'
import './css/index.css'
import Routing from './routes.jsx';
import ReactDOM from "react-dom/client";


function App() {


    return (
        <>
            <Routing/>
        </>

    )
}

export default App

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
