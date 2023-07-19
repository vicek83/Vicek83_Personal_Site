import React, {useState, useEffect} from 'react';
import YoutubeReviews from "./youtubeReviews.jsx";


const apiKey = import.meta.env.VITE_YOUTUBE_API;
const playlistId = "PL1ffmftq2FG8ev7JLgSCMHlPHzyH1f7SJ";

export default function FetchYoutubeReviews() {
    const [playlist, setPlaylist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getData = async () => {

        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
        );

        if (response.ok) {
            const data = await response.json();
            setPlaylist(data.items);
            setIsLoading(false);

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
            {isLoading ? ( <p className="text-2xl">Trwa pobieranie danych...</p>
            ) : (
            <YoutubeReviews playlist={playlist}/>
            )}
        </>
    )

}
