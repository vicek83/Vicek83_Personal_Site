import React, {useState, useEffect} from 'react';


const apiKey = import.meta.env.VITE_YOUTUBE_API;
const channelId = "UCCTC_DxJjVPoYqOJTHGxl4w";
const playlistId = "UUCTC_DxJjVPoYqOJTHGxl4w"

export default function FetchYoutubeVideos() {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getVideos = async () => {

        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${playlistId}&key=${apiKey}`
        );

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setVideos(data.items);
            setIsLoading(false);

        } else {
            throw new Error("Błąd wczytywania danych!");
        }
    };

    useEffect(() => {
        getVideos()
            .then(() => {
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);


    return (
        <>
            <div className="container mx-auto">
                <div
                    className="">
                    <h2 className="overflow-hidden font-['courgette'] text-center text-6xl mb-12">Sprawdź, co nowego na kanale!</h2>


                        {videos.map((video => (
                            <div className="">
                                <iframe className="w-full max-w-screen-sm h-96 mx-auto"
                                        src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                                        title="YouTube Playlist"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                />
                            </div>



                        )))}

                </div>
            </div>

        </>
    )
}
