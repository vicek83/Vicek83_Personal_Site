import React, {useState, useEffect} from 'react';
import {supabase} from "../../supabaseClient.js";
import Blog from "./blog.jsx";


const FetchBlog = ({numberOfNotes}) => {

    const [blogNotes, setBlogNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getBlog();
    }, [])


    async function getBlog() {
        try {
            const {data: Blog, error} = await supabase
                .from('Blog')
                .select('*')
                .order('id', {ascending: false})
                .limit(numberOfNotes)

            if (error) throw error;
            if (Blog !== null) {
                console.log(Blog);
                setBlogNotes(Blog);
                setIsLoading(false);

            }
        } catch (error) {
            alert(error.message);
        }
    }


    return (
        <>
            {isLoading ? ( <p className="text-2xl">Trwa pobieranie danych...</p>
                ) : (
                    <Blog blogNotes={blogNotes} />
                )}
        </>
    )
}

export default FetchBlog