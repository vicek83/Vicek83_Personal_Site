import React, {useState, useEffect} from 'react';
import Youtube from "./youtube.jsx";


const apiKey = import.meta.env.VITE_YOUTUBE_API;
const channelId = "UCCTC_DxJjVPoYqOJTHGxl4w";

export default function FetchYoutube() {
    const [playlists, setPlaylists] = useState([]);
    const getData = async () => {

        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=50&channelId=${channelId}&key=${apiKey}`
        );

        if (response.ok) {
            const data = await response.json();
            setPlaylists(data.items);

        } else {
            throw new Error("Błąd wczytywania danych!");
        }
    };

    useEffect(() => {
        getData()
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);


    return (
        <>
            <Youtube playlists={playlists}/>
        </>
    )

}
