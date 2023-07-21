import React, {useState, useEffect} from 'react';
import Youtube from "./youtube.jsx";


const apiKey = import.meta.env.VITE_YOUTUBE_API;
const channelId = "UCCTC_DxJjVPoYqOJTHGxl4w";

export default function FetchYoutube() {
    const [playlists, setPlaylists] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getData = async () => {

        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=50&channelId=${channelId}&key=${apiKey}`
        );

        if (response.ok) {
            const data = await response.json();
            setPlaylists(data.items);
            setIsLoading(false);

        } else {
            throw new Error("Błąd wczytywania danych!");
        }
    };

    useEffect(() => {
        getData()
            .then(() => {
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);


    return (
        <>
            {isLoading ? ( <p className="text-2xl">Trwa pobieranie danych...</p>
            ) : (
            <Youtube playlists={playlists}/>
            )}
        </>
    )

}
